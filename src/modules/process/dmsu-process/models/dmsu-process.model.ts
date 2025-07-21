import { StorageModel } from '@modules/libs/storage/models'
import { ProcessModel } from '@modules/process/process-core/models'
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'

import { DmsuStage } from '@/prisma/generated'

registerEnumType(DmsuStage, {
	name: 'DmsuStage'
})

@ObjectType()
export class DmsuProcessModel {
	@Field(() => ProcessModel)
	process: ProcessModel

	@Field(() => StorageModel, { nullable: true })
	withoutWMFile?: StorageModel

	@Field(() => StorageModel)
	personInfoFile: StorageModel

	@Field(() => StorageModel, { nullable: true })
	resultFile: StorageModel

	@Field(() => DmsuStage)
	stage: DmsuStage

	@Field(() => String, { nullable: true })
	errorMessage: string

	@Field(() => Boolean)
	isAi: boolean
}
