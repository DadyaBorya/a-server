import { StorageModel } from '@modules/libs/storage/models'
import { ProcessModel } from '@modules/process/process-core/models'
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'

import { ErdStage } from '@/prisma/generated'

registerEnumType(ErdStage, {
	name: 'ErdStage'
})

@ObjectType()
export class ErdProcessModel {
	@Field(() => ProcessModel)
	process: ProcessModel

	@Field(() => StorageModel, { nullable: true })
	grantedInputFile: StorageModel

	@Field(() => StorageModel, { nullable: true })
	acceptedInputFile: StorageModel

	@Field(() => StorageModel, { nullable: true })
	resultFile: StorageModel

	@Field(() => ErdStage)
	stage: ErdStage

	@Field(() => String, { nullable: true })
	errorMessage: string

	@Field(() => Boolean)
	isAi: boolean
}
