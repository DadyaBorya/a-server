import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/generated'
import { hash, verify } from 'argon2'

import { User } from '@/prisma/generated'

import {
	InvalidPasswordException,
	UsernameAlreadyTakenException,
	UserNotFoundException
} from './exceptions'
import {
	CreateUserInput,
	ListUsersInput,
	ResetUserPasswordInput,
	UpdateUserPasswordInput
} from './inputs'
import { UserListModel } from './models'
import { UserRepository } from './user.repository'

@Injectable()
export class AccountService {
	constructor(private readonly userRepository: UserRepository) {}

	async findAll(input: ListUsersInput) {
		const {
			page,
			limit,
			orderBy = 'createdAt',
			orderDirection,
			searchFor
		} = input

		const skip = (page - 1) * limit
		const take = limit

		const where: Prisma.UserWhereInput = searchFor
			? {
					OR: [
						{
							username: {
								contains: searchFor,
								mode: 'insensitive'
							}
						},
						{
							displayName: {
								contains: searchFor,
								mode: 'insensitive'
							}
						}
					]
				}
			: {}

		const order: Prisma.UserOrderByWithRelationInput = {
			[orderBy]: orderDirection.toLowerCase()
		}

		const [data, total] = await Promise.all([
			this.userRepository.findMany({
				where,
				orderBy: order,
				skip,
				take
			}),
			this.userRepository.count({ where })
		])

		const pages = Math.ceil(total / limit)
		const hasNext = page < pages
		const hasPrev = page > 1

		const result: UserListModel = {
			data,
			total,
			pages,
			currentPage: page,
			hasNext,
			hasPrev
		}

		return result
	}

	async findById(id: string) {
		const user = await this.userRepository.findById(id)

		if (!user) {
			throw new UserNotFoundException()
		}

		return user
	}

	async findByUsername(username: string) {
		const user = await this.userRepository.findByUsername(username)

		if (!user) {
			throw new UserNotFoundException()
		}

		return user
	}

	async create(input: CreateUserInput) {
		const { username, password } = input

		const isUsernameExists =
			await this.userRepository.findByUsername(username)

		if (isUsernameExists) {
			throw new UsernameAlreadyTakenException()
		}

		await this.userRepository.createUser({
			...input,
			password: await hash(password)
		})

		return true
	}

	async update(id: string, data: Partial<User>) {
		await this.findById(id)

		if (data.username) {
			const isUsernameExists = await this.userRepository.findByUsername(
				data.username
			)

			if (isUsernameExists) {
				throw new UsernameAlreadyTakenException()
			}
		}

		await this.userRepository.updateUser(id, data)

		return true
	}

	async updatePassword(id: string, input: UpdateUserPasswordInput) {
		const { currentPassword, password } = input

		const user = await this.findById(id)

		const isValidPassword = await verify(user.password, currentPassword)

		if (!isValidPassword) {
			throw new InvalidPasswordException()
		}

		const hashedPassword = await hash(password)

		await this.update(id, { password: hashedPassword })

		return true
	}

	async resetPassword(input: ResetUserPasswordInput) {
		const { id, password } = input

		await this.findById(id)

		const hashedPassword = await hash(password)

		await this.update(id, { password: hashedPassword })

		return true
	}
}
