import { Field, InputType, Int } from '@nestjs/graphql'
import { OrderDirection } from '@shared/enums'
import {
	IsEnum,
	IsInt,
	IsOptional,
	IsPositive,
	IsString,
	Min
} from 'class-validator'

@InputType()
export class PaginationInput {
	@Field(() => Int, { nullable: true })
	@IsInt()
	@Min(1)
	@IsOptional()
	page: number = 1

	@Field(() => Int, { nullable: true })
	@IsInt()
	@IsPositive()
	@IsOptional()
	limit: number = 20

	@Field({ nullable: true })
	@IsString()
	@IsOptional()
	orderBy?: string

	@Field(() => OrderDirection, { nullable: true })
	@IsEnum(OrderDirection)
	@IsOptional()
	orderDirection: OrderDirection = OrderDirection.ASC

	@Field({ nullable: true })
	@IsString()
	@IsOptional()
	searchFor?: string
}
