import { StorageModel } from '@modules/libs/storage/models'
import { ProcessModel } from '@modules/process/process-core/models'
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'

import { HstsMvsStage } from '@/prisma/generated'

registerEnumType(HstsMvsStage, {
	name: 'HstsMvsStage'
})

@ObjectType()
export class HstsMvsProcessModel {
	@Field(() => ProcessModel)
	process: ProcessModel

	@Field(() => StorageModel)
	driverLicenseFile: StorageModel

	@Field(() => StorageModel)
	carInfoFile: StorageModel

	@Field(() => StorageModel, { nullable: true })
	resultFile: StorageModel

	@Field(() => HstsMvsStage)
	stage: HstsMvsStage

	@Field(() => String, { nullable: true })
	errorMessage: string

	@Field(() => Boolean)
	isAi: boolean
}
