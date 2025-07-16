import { ProcessCoreService } from '@modules/process/process-core'
import { CanActivate, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { ForbiddenInsufficientPermissionsException } from '@shared/exceptions'

import { Permission, User } from '@/prisma/generated'

export class GqlFindHstsMvsProcessGuard implements CanActivate {
	constructor(private readonly processService: ProcessCoreService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const gqlCtx = GqlExecutionContext.create(context)
		const request = gqlCtx.getContext().request

		const user = request.user as User
		const args = gqlCtx.getArgs()
		const id = args.id

		if (
			user.isSuperUser ||
			user.permissions.includes(Permission.PROCESS_READ_ALL)
		) {
			return true
		}

		const process = await this.processService.findById(id)

		if (process.id !== id) {
			throw new ForbiddenInsufficientPermissionsException()
		}

		if (!user.permissions.includes(Permission.PROCESS_READ_OWN)) {
			throw new ForbiddenInsufficientPermissionsException()
		}

		return true
	}
}
