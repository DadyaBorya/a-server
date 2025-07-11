import { ObjectType } from '@nestjs/graphql'

import { PaginationModel } from '@/src/shared/graphql/models'

import { UserModel } from './user.model'

const UserPagination = PaginationModel(UserModel)

@ObjectType({})
export class UserListModel extends UserPagination {}
