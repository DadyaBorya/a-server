import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator'

@InputType()
export class ResetUserPasswordInput {
	@Field()
	@IsUUID()
	id: string

	@Field()
	@IsString()
	@IsNotEmpty()
	@MinLength(8)
	password: string
}
