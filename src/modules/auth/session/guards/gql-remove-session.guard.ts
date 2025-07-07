import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

import { Permission } from '@/prisma/generated'
import { hasPermission } from '@/src/shared/utils'

import {
	CannotDeleteCurrentSessionException,
	NoPermissionToDeleteSessionException
} from '../exceptions'
import { SessionService } from '../session.service'

@Injectable()
export class GqlRemoveSessionGuard implements CanActivate {
	constructor(private readonly sessionService: SessionService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const gqlCtx = GqlExecutionContext.create(context)
		const request = gqlCtx.getContext().request

		const user = request.user
		const requestSession = request.session

		const args = gqlCtx.getArgs()
		const id = args.id

		if (requestSession.id === id) {
			throw new CannotDeleteCurrentSessionException()
		}

		const session = await this.sessionService.getSession(id)

		hasPermission(
			user,
			[Permission.USER_UPDATE],
			NoPermissionToDeleteSessionException,
			() => session.userId === requestSession.userId
		)

		return true
	}
}
