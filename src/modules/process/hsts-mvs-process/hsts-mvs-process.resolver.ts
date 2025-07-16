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

import { GqlFindHstsMvsProcessGuard } from './guards'
import { HstsMvsProcessService } from './hsts-mvs-process.service'
import { HstsMvsProcessModel } from './models'

@Resolver('HstsMvsProcess')
export class HstsMvsProcessResolver {
	constructor(
		private readonly hstsMvsProcessService: HstsMvsProcessService
	) {}

	@UseGuards(GqlFindHstsMvsProcessGuard)
	@GqlAuthorization()
	@Query(() => HstsMvsProcessModel, { name: 'findHstsMvsById' })
	async findById(@Args('id', ParseUUIDPipe) id: string) {
		return this.hstsMvsProcessService.findById(id, {
			process: {
				include: { user: true }
			},
			driverLicenseFile: true,
			carInfoFile: true,
			resultFile: true
		})
	}

	@GqlAuthorizedWithPermissions(Permission.HSTS_MVS_CREATE)
	@Mutation(() => String, { name: 'createHstsMvsProcess' })
	async create(
		@Args(
			'driverLicenseFile',
			{ type: () => GraphQLUpload },
			new FileValidationPipe({
				allowedFormats: ['xls']
			})
		)
		driverLicenseFile: FileUpload,
		@Args(
			'carInfoFile',
			{ type: () => GraphQLUpload },
			new FileValidationPipe({
				allowedFormats: ['xls']
			})
		)
		carInfoFile: FileUpload,
		@GqlAuthorized('id') userId: string
	) {
		return this.hstsMvsProcessService.createRequest(
			driverLicenseFile,
			carInfoFile,
			userId
		)
	}
}
