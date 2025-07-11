import { InputType } from '@nestjs/graphql'

import { PaginationInput } from '@/src/shared/graphql/inputs'

@InputType()
export class ListUsersInput extends PaginationInput {}
