import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'

import { Permission } from '@/prisma/generated'

import { PERMISSIONS_KEY } from '../decorators'
import { ForbiddenInsufficientPermissionsException } from '../exceptions'

@Injectable()
export class GqlPermissionsGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}

	canActivate(context: ExecutionContext): boolean {
		const requiredPermissions = this.reflector.getAllAndOverride<
			Permission[]
		>(PERMISSIONS_KEY, [context.getHandler(), context.getClass()])

		if (!requiredPermissions || requiredPermissions.length === 0) {
			return true
		}

		const ctx = GqlExecutionContext.create(context).getContext().request

		const user = ctx.user

		if (user.isSuperUser) {
			return true
		}

		const hasPermission = requiredPermissions.every(permission =>
			user.permissions.includes(permission)
		)

		if (!hasPermission) {
			throw new ForbiddenInsufficientPermissionsException()
		}

		return true
	}
}
