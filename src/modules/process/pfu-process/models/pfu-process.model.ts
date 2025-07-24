import { StorageModel } from '@modules/libs/storage/models'
import { ProcessModel } from '@modules/process/process-core/models'
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'

import { PfuStage } from '@/prisma/generated'

registerEnumType(PfuStage, {
	name: 'PfuStage'
})

@ObjectType()
export class PfuProcessModel {
	@Field(() => ProcessModel)
	process: ProcessModel

	@Field(() => StorageModel)
	inputFile: StorageModel

	@Field(() => StorageModel, { nullable: true })
	resultFile: StorageModel

	@Field(() => PfuStage)
	stage: PfuStage

	@Field(() => String, { nullable: true })
	errorMessage: string

	@Field(() => Boolean)
	isAi: boolean
}
