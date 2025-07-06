import { RedisService } from '@core/redis'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import {
	createTotp,
	getSessionMetadata,
	hasPermission,
	validateTotp
} from '@shared/utils'
import { verify } from 'argon2'
import { Request } from 'express'

import { Permission } from '@/prisma/generated'

import { AccountService } from '../account'

import {
	CannotDeleteCurrentSessionException,
	InvalidCredentialsException,
	NoPermissionToDeleteSessionException,
	SessionDestroyFailedException,
	SessionNotFoundException,
	SessionSaveFailedException,
	TotpPinRequiredException
} from './exceptions'
import { LoginInput } from './input'

@Injectable()
export class SessionService {
	private readonly sessionFolder: string
	private readonly sessionName: string

	public constructor(
		private readonly configService: ConfigService,
		private readonly redisService: RedisService,
		private readonly accountService: AccountService
	) {
		this.sessionFolder =
			this.configService.getOrThrow<string>('SESSION_FOLDER')
		this.sessionName = this.configService.getOrThrow<string>('SESSION_NAME')
	}

	public async findSessions(userId: string, requestSessionId: string) {
		const keys = await this.redisService.keys(`${this.sessionFolder}*`)

		const userSessions = []

		for (const key of keys) {
			const data = await this.redisService.get(key)
			if (!data) continue

			const session = JSON.parse(data)
			if (session.userId === userId) {
				userSessions.push({
					...session,
					id: key.replace(this.sessionFolder, '')
				})
			}
		}

		userSessions.sort((a, b) => b.createdAt - a.createdAt)

		return userSessions.filter(session => session.id !== requestSessionId)
	}

	async findCurrent(request: Request) {
		const sessionId = request.session.id

		const session = await this.getSession(sessionId)
		return { ...session, id: sessionId }
	}

	public async login(request: Request, input: LoginInput, userAgent: string) {
		const { username, password, pin } = input

		const user = await this.accountService.findByUsername(username)

		const isValidPassword = await verify(user.password, password)

		if (!isValidPassword) throw new InvalidCredentialsException()

		if (user.isTotpEnabled) {
			if (!pin) {
				throw new TotpPinRequiredException()
			}

			const totp = createTotp(username, user.totpSecret)

			validateTotp(totp, pin)
		}

		const metadata = getSessionMetadata(request, userAgent)

		return new Promise((resolve, reject) => {
			request.session.createdAt = new Date()
			request.session.userId = user.id
			request.session.metadata = metadata

			request.session.save(err => {
				if (err) {
					return reject(new SessionSaveFailedException())
				}

				resolve(true)
			})
		})
	}

	public async logout(request: Request) {
		return new Promise((resolve, reject) => {
			request.session.destroy(err => {
				if (err) {
					return reject(new SessionDestroyFailedException())
				}

				request.res.clearCookie(this.sessionName)
				resolve(true)
			})
		})
	}

	public async clearSession(request: Request) {
		request.res.clearCookie(this.sessionName)

		return true
	}

	public async remove(req: Request, id: string) {
		if (req.session.id === id) {
			throw new CannotDeleteCurrentSessionException()
		}

		const session = await this.getSession(id)

		const currentUser = await this.accountService.findById(
			req.session.userId
		)

		hasPermission(
			currentUser,
			[Permission.USER_UPDATE],
			NoPermissionToDeleteSessionException,
			() => session.userId === req.session.userId
		)

		await this.redisService.del(`${this.sessionFolder}${id}`)

		return true
	}

	async getSession(id: string) {
		const sessionData = await this.redisService.get(
			`${this.sessionFolder}${id}`
		)

		if (!sessionData) {
			throw new SessionNotFoundException()
		}

		return JSON.parse(sessionData)
	}
}
