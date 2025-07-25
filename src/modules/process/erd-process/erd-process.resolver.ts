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

import { ErdProcessService } from './erd-process.service'
import { ErdProcessModel } from './models'

@Resolver('ErdProcess')
export class ErdProcessResolver {
	constructor(private readonly erdProcessService: ErdProcessService) {}

	@UseGuards(GqlFindProcessGuard)
	@GqlAuthorization()
	@Query(() => ErdProcessModel, { name: 'findErdById' })
	async findById(@Args('id', ParseUUIDPipe) id: string) {
		return this.erdProcessService.findById(id, {
			process: {
				include: { user: true }
			},
			grantedІnputFile: true,
			acceptedІnputFile: true,
			resultFile: true
		})
	}

	@GqlAuthorizedWithPermissions(Permission.ERD_CREATE)
	@Mutation(() => String, { name: 'createErdProcess' })
	async create(
		@Args(
			'grantedInputFile',
			{ type: () => GraphQLUpload, nullable: true },
			new FileValidationPipe({
				allowedFormats: ['pdf'],
				isOptional: true
			})
		)
		grantedInputFile: FileUpload,
		@Args(
			'acceptedInputFile',
			{ type: () => GraphQLUpload, nullable: true },
			new FileValidationPipe({
				allowedFormats: ['pdf'],
				isOptional: true
			})
		)
		acceptedInputFile: FileUpload,
		@Args('isAi', { nullable: true }) isAi: boolean,
		@GqlAuthorized('id') userId: string
	) {
		return this.erdProcessService.createRequest(
			grantedInputFile,
			acceptedInputFile,
			userId,
			isAi
		)
	}
}
