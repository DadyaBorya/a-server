import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'

import { User } from '@/prisma/generated'

import {
	UsernameAlreadyTakenException,
	UserNotFoundException
} from './exceptions'
import { CreateUserInput, UpdateUserPasswordInput } from './inputs'
import { UserRepository } from './user.repository'

@Injectable()
export class AccountService {
	constructor(private readonly userRepository: UserRepository) {}

	async findAll() {
		const users = await this.userRepository.findMany()

		return users
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

	async updatePassword(input: UpdateUserPasswordInput) {
		const { id, password } = input

		const hashedPassword = await hash(password)

		return this.update(id, { password: hashedPassword })
	}
}
