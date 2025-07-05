import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'

import { PrismaService } from '@/src/core/prisma'

import {
	AuthNotAuthenticatedException,
	AuthUserBlockedException,
	TotpNotEnabledException
} from '../exceptions'

export const SKIP_TOTP_CHECK = 'skipTotpCheck'

@Injectable()
export class GqlAuthGuard implements CanActivate {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly reflector: Reflector
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const ctx = GqlExecutionContext.create(context)

		const request = ctx.getContext().request

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

		const skipTotpCheck = this.reflector.getAllAndOverride<boolean>(
			SKIP_TOTP_CHECK,
			[context.getHandler(), context.getClass()]
		)

		if (!skipTotpCheck && !user.isTotpEnabled) {
			throw new TotpNotEnabledException()
		}

		request.user = user

		return true
	}
}
