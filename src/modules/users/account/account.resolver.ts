import { ParseUUIDPipe, UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import {
	GqlAuthorization,
	GqlAuthorized,
	GqlAuthorizedWithPermissions
} from '@shared/decorators'

import { Permission, User } from '@/prisma/generated'

import { AccountService } from './account.service'
import { GqlFindUserByIdGuard } from './guards'
import {
	CreateUserInput,
	ListUsersInput,
	ResetUserPasswordInput,
	UpdateUserInput,
	UpdateUserPasswordInput
} from './inputs'
import { UserListModel, UserModel } from './models'

@Resolver('Account')
export class AccountResolver {
	constructor(private readonly accountService: AccountService) {}

	// Отрмання всіх користувачів
	@GqlAuthorizedWithPermissions(Permission.USER_READ)
	@Query(() => UserListModel, { name: 'findAllUsers' })
	async findAll(@Args('data') input: ListUsersInput) {
		return this.accountService.findAll(input)
	}

	@UseGuards(GqlFindUserByIdGuard)
	@GqlAuthorization()
	@Query(() => UserModel, { name: 'findUserById' })
	async findById(@Args('id', ParseUUIDPipe) id: string) {
		return this.accountService.findById(id)
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

	// Відновлення пароля користувача
	@GqlAuthorizedWithPermissions(Permission.USER_RESET_PASSWORD)
	@Mutation(() => Boolean, { name: 'resetPasswordUser' })
	async updatePassword(@Args('data') input: ResetUserPasswordInput) {
		return this.accountService.resetPassword(input)
	}

	// Зміна пароля користувача
	@GqlAuthorization()
	@Mutation(() => Boolean, { name: 'updatePasswordUser' })
	async resetPassword(
		@GqlAuthorized('id') userId: string,
		@Args('data') input: UpdateUserPasswordInput
	) {
		return this.accountService.updatePassword(userId, input)
	}
}
