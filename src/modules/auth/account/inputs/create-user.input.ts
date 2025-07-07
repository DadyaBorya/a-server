import { Field, InputType } from '@nestjs/graphql'
import {
	IsArray,
	IsBoolean,
	IsEnum,
	IsNotEmpty,
	IsOptional,
	IsString,
	Matches,
	MinLength
} from 'class-validator'

import { Permission } from '../models'

@InputType()
export class CreateUserInput {
	@Field()
	@IsString()
	@IsNotEmpty()
	@Matches(/^[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*$/)
	username: string

	@Field()
	@IsString()
	@IsNotEmpty()
	@MinLength(8)
	password: string

	@Field()
	@IsString()
	@IsNotEmpty()
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

	isBlocked: boolean
}
