import { Field, Int, ObjectType } from '@nestjs/graphql'

import { StorageFile } from '@/prisma/generated'

@ObjectType()
export class StorageModel implements StorageFile {
	@Field(() => String)
	id: string

	@Field(() => String)
	inputFilename: string

	@Field(() => String, { nullable: true })
	outputFilename: string

	@Field(() => String)
	extension: string

	@Field(() => Int)
	size: number

	bucket: string
	path: string
}
