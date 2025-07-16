import { InputType } from '@nestjs/graphql'
import { PaginationInput } from '@shared/graphql/inputs'

@InputType()
export class ListProcessesInput extends PaginationInput {}
