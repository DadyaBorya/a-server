import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString, MinLength } from 'class-validator'

@InputType()
export class UpdateUserPasswordInput {
	@Field()
	@IsString()
	@IsNotEmpty()
	@MinLength(8)
	currentPassword: string

	@Field()
	@IsString()
	@IsNotEmpty()
	@MinLength(8)
	password: string
}
