import { Field, InputType } from '@nestjs/graphql'
import {
	IsNotEmpty,
	IsOptional,
	IsString,
	Length,
	Matches,
	MinLength
} from 'class-validator'

@InputType()
export class LoginInput {
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

	@Field({ nullable: true })
	@IsString()
	@IsNotEmpty()
	@IsOptional()
	@Length(6, 6)
	pin?: string
}
