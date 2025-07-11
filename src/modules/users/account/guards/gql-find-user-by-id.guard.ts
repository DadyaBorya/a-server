import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

import { ForbiddenInsufficientPermissionsException } from '@/src/shared/exceptions'
import { hasPermission } from '@/src/shared/utils'

import { Permission } from '../models'

@Injectable()
export class GqlFindUserByIdGuard implements CanActivate {
	async canActivate(context: ExecutionContext): Promise<boolean> {
		const gqlCtx = GqlExecutionContext.create(context)
		const request = gqlCtx.getContext().request

		const user = request.user
		const args = gqlCtx.getArgs()
		const id = args.id

		hasPermission(
			user,
			[Permission.USER_READ],
			ForbiddenInsufficientPermissionsException,
			() => user.id === id
		)

		return true
	}
}
