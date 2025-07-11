import { Field, Int, ObjectType } from '@nestjs/graphql'

export function PaginationModel<TItem>(TClass: new () => TItem) {
	@ObjectType({ isAbstract: true })
	abstract class PaginationModelClass {
		@Field(() => [TClass])
		data: TItem[]

		@Field(() => Int)
		total: number

		@Field(() => Int)
		pages: number

		@Field(() => Int)
		currentPage: number

		@Field(() => Boolean)
		hasNext: boolean

		@Field(() => Boolean)
		hasPrev: boolean
	}
	return PaginationModelClass
}
