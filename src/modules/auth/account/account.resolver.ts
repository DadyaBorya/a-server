import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import {
	GqlAuthorization,
	GqlAuthorized,
	GqlAuthorizedWithPermissions
} from '@shared/decorators'

import { Permission, User } from '@/prisma/generated'

import { AccountService } from './account.service'
import {
	CreateUserInput,
	UpdateUserInput,
	UpdateUserPasswordInput
} from './inputs'
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
	async me(@GqlAuthorized() user: User) {
		return user
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

	// Зміна пароля користувача
	@GqlAuthorizedWithPermissions(Permission.USER_UPDATE)
	@Mutation(() => Boolean, { name: 'updatePasswordUser' })
	async updatePassword(@Args('data') input: UpdateUserPasswordInput) {
		return this.accountService.updatePassword(input)
	}
}
