import { Field, ID, ObjectType } from '@nestjs/graphql'

import { User } from '@/prisma/generated'

import { Permission } from './permission.enum'

@ObjectType({})
export class UserModel implements User {
	@Field(() => ID)
	id: string

	@Field(() => String)
	username: string

	@Field(() => String)
	displayName: string

	@Field(() => [Permission])
	permissions: Permission[]

	@Field(() => Boolean)
	isTotpEnabled: boolean

	@Field(() => String, { nullable: true })
	avatar: string

	@Field(() => Boolean)
	isSuperUser: boolean

	@Field(() => Boolean)
	isBlocked: boolean

	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date

	password: string
	totpSecret: string
}
