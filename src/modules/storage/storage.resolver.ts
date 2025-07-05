import { Args, Mutation, Resolver } from '@nestjs/graphql'
import * as GraphQlUpload from 'graphql-upload/GraphQLUpload.js'
import * as Upload from 'graphql-upload/Upload.js'

import { FileValidationPipe } from '@/src/shared/pipe'

import { StorageService } from './storage.service'

@Resolver('Storage')
export class StorageResolver {
	constructor(private readonly storageService: StorageService) {}

	// TODO! NEED TO CHECK
	@Mutation(() => Boolean, { name: 'upload' })
	async upload(
		@Args('file', { type: () => GraphQlUpload }, FileValidationPipe)
		file: Upload
	) {
		await this.storageService.upload(file, '123')
		return true
	}
}
