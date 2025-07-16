import { ObjectType } from '@nestjs/graphql'
import { PaginationModel } from '@shared/graphql/models'

import { ProcessModel } from './process.model'

const ProcessPagination = PaginationModel(ProcessModel)

@ObjectType({})
export class ProcessListModel extends ProcessPagination {}
