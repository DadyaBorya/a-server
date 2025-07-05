import { Field, InputType } from '@nestjs/graphql'
import {
	IsArray,
	IsBoolean,
	IsEnum,
	IsNotEmpty,
	IsOptional,
	IsString,
	IsUUID,
	Matches
} from 'class-validator'

import { Permission } from '../models'

@InputType()
export class UpdateUserInput {
	@Field()
	@IsUUID()
	id: string

	@Field({ nullable: true })
	@IsString()
	@IsNotEmpty()
	@Matches(/^[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*$/)
	@IsOptional()
	username: string

	password: string

	@Field({ nullable: true })
	@IsString()
	@IsNotEmpty()
	@IsOptional()
	displayName: string

	@Field({ nullable: true })
	@IsBoolean()
	@IsOptional()
	isSuperUser: boolean

	@Field(() => [Permission], { nullable: true })
	@IsArray()
	@IsEnum(Permission, {
		each: true
	})
	@IsOptional()
	permissions: Permission[]

	@Field({ nullable: true })
	@IsBoolean()
	@IsOptional()
	isBlocked: boolean
}
