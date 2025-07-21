import { ParseUUIDPipe, UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import {
	GqlAuthorization,
	GqlAuthorized,
	GqlAuthorizedWithPermissions
} from '@shared/decorators'
import { FileValidationPipe } from '@shared/pipe'
import { FileUpload, GraphQLUpload } from 'graphql-upload'

import { Permission } from '@/prisma/generated'

import { GqlFindProcessGuard } from '../process-core/guards'

import { DmsuProcessService } from './dmsu-process.service'
import { DmsuProcessModel } from './models'

@Resolver('DmsuProcess')
export class DmsuProcessResolver {
	constructor(private readonly dmsuProcessService: DmsuProcessService) {}

	@UseGuards(GqlFindProcessGuard)
	@GqlAuthorization()
	@Query(() => DmsuProcessModel, { name: 'findDmsuById' })
	async findById(@Args('id', ParseUUIDPipe) id: string) {
		return this.dmsuProcessService.findById(id, {
			process: {
				include: { user: true }
			},
			withoutWMFile: true,
			personInfoFile: true,
			resultFile: true
		})
	}

	@GqlAuthorizedWithPermissions(Permission.DMSU_CREATE)
	@Mutation(() => String, { name: 'createDmsuProcess' })
	async create(
		@Args(
			'personInfoFile',
			{ type: () => GraphQLUpload },
			new FileValidationPipe({
				allowedFormats: ['pdf']
			})
		)
		personInfoFile: FileUpload,
		@Args('isAi', { nullable: true }) isAi: boolean,
		@GqlAuthorized('id') userId: string
	) {
		return this.dmsuProcessService.createRequest(
			personInfoFile,
			userId,
			isAi
		)
	}
}
