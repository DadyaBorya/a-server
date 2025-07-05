import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

import { PrismaService } from '@/src/core/prisma'

import {
	AuthNotAuthenticatedException,
	AuthUserBlockedException
} from '../exceptions'

@Injectable()
export class GqlAuthGuard implements CanActivate {
	constructor(private readonly prismaService: PrismaService) {}

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

		request.user = user

		return true
	}
}
