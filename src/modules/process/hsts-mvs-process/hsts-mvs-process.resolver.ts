import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { GqlAuthorized, GqlAuthorizedWithPermissions } from '@shared/decorators'
import { FileValidationPipe } from '@shared/pipe'
import { FileUpload, GraphQLUpload } from 'graphql-upload'

import { Permission } from '@/prisma/generated'

import { HstsMvsProcessService } from './hsts-mvs-process.service'

@Resolver('HstsMvsProcess')
export class HstsMvsProcessResolver {
	constructor(
		private readonly hstsMvsProcessService: HstsMvsProcessService
	) {}

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
