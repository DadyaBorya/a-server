import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Permission } from '@/prisma/generated'
import {
	Authorized,
	GqlAuthorization,
	GqlAuthorizedWithPermissions
} from '@/src/shared/decorators'

import { AccountService } from './account.service'
import { CreateUserInput, UpdateUserInput } from './inputs'
import { UserModel } from './models'

@Resolver('Account')
export class AccountResolver {
	constructor(private readonly accountService: AccountService) {}

	// Отрмання всіх користувачів
	@GqlAuthorizedWithPermissions(Permission.USER_READ)
	@Query(() => [UserModel], { name: 'findAllUsers' })
	async findAll() {
		return this.accountService.findAll()
	}

	// Отримання поточного користувача
	@Query(() => UserModel, { name: 'findMe' })
	@GqlAuthorization()
	async me(@Authorized('id') id: string) {
		return this.accountService.findById(id)
	}

	// Створення нового користувача
	@GqlAuthorizedWithPermissions(Permission.USER_CREATE)
	@Mutation(() => Boolean, { name: 'createUser' })
	async create(@Args('data') input: CreateUserInput) {
		return this.accountService.create(input)
	}

	// Створення нового користувача
	@GqlAuthorizedWithPermissions(Permission.USER_UPDATE)
	@Mutation(() => Boolean, { name: 'updateUser' })
	async update(@Args('data') input: UpdateUserInput) {
		return this.accountService.update(input.id, input)
	}
}
