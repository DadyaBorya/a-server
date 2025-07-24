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

import { PfuProcessModel } from './models'
import { PfuProcessService } from './pfu-process.service'

@Resolver('PfuProcess')
export class PfuProcessResolver {
	constructor(private readonly pfuProcessService: PfuProcessService) {}

	@GqlAuthorizedWithPermissions(Permission.PFU_CREATE)
	@Mutation(() => String, { name: 'createPfuProcess' })
	async create(
		@Args(
			'inputFile',
			{ type: () => GraphQLUpload },
			new FileValidationPipe({
				allowedFormats: ['xml', 'XML']
			})
		)
		inputFile: FileUpload,
		@Args('isAi', { nullable: true }) isAi: boolean,
		@GqlAuthorized('id') userId: string
	) {
		return this.pfuProcessService.createRequest(inputFile, userId, isAi)
	}

	@UseGuards(GqlFindProcessGuard)
	@GqlAuthorization()
	@Query(() => PfuProcessModel, { name: 'findPfuById' })
	async findById(@Args('id', ParseUUIDPipe) id: string) {
		return this.pfuProcessService.findById(id, {
			process: {
				include: { user: true }
			},
			inputFile: true,
			resultFile: true
		})
	}
}
