import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

import { PrismaService } from '@/src/core/prisma'

import {
	AuthNotAuthenticatedException,
	AuthUserBlockedException,
	TotpNotEnabledException
} from '../exceptions'

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly reflector: Reflector
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest()

		if (request.session.userId === undefined) {
			throw new AuthNotAuthenticatedException()
		}

		const user = await this.prismaService.user.findUnique({
			where: {
				id: request.session.userId
			}
		})

		if (user.isBlocked) {
			throw new AuthUserBlockedException()
		}

		if (!user.isTotpEnabled) {
			throw new TotpNotEnabledException()
		}

		request.user = user

		return true
	}
}
