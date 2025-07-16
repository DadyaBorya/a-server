import { Args, Query, Resolver } from '@nestjs/graphql'
import { GqlAuthorized, GqlAuthorizedWithPermissions } from '@shared/decorators'

import { Permission } from '@/prisma/generated'

import { ListProcessesInput } from './inputs'
import { ProcessListModel } from './models'
import { ProcessCoreService } from './process-core.service'

@Resolver('Process')
export class ProcessResolver {
	constructor(private readonly processService: ProcessCoreService) {}

	@GqlAuthorizedWithPermissions(Permission.PROCESS_READ_OWN)
	@Query(() => ProcessListModel, { name: 'findAllOwnProcesses' })
	async findAllOwn(
		@Args('data') input: ListProcessesInput,
		@GqlAuthorized('id') id: string
	) {
		return this.processService.findAll(input, id)
	}

	@GqlAuthorizedWithPermissions(Permission.PROCESS_READ_OWN)
	@Query(() => ProcessListModel, { name: 'findAllProcesses' })
	async findAll(@Args('data') input: ListProcessesInput) {
		return this.processService.findAll(input)
	}
}
