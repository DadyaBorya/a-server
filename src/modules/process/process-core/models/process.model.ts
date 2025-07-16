import { UserModel } from '@modules/users/account/models'
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'

import { ProcessType, Status } from '@/prisma/generated'

registerEnumType(ProcessType, {
	name: 'ProcessType'
})

registerEnumType(Status, {
	name: 'Status'
})

@ObjectType()
export class ProcessModel {
	@Field(() => String)
	id: string

	@Field(() => UserModel)
	user: UserModel

	@Field(() => String, { nullable: true })
	owner: string

	@Field(() => ProcessType)
	type: ProcessType

	@Field(() => Status)
	status: Status

	@Field(() => Date)
	createdAt: Date
}
