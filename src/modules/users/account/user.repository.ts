import { PrismaService } from '@core/prisma'
import { Injectable } from '@nestjs/common'
import { Prisma, User } from '@prisma/generated'

import { CreateUserInput } from './inputs'

@Injectable()
export class UserRepository {
	constructor(private readonly prisma: PrismaService) {}

	async createUser(data: CreateUserInput): Promise<User> {
		return this.prisma.user.create({ data })
	}

	async findById(id: string): Promise<User | null> {
		return this.prisma.user.findUnique({ where: { id } })
	}

	async findByUsername(username: string): Promise<User | null> {
		return this.prisma.user.findUnique({ where: { username } })
	}

	async findMany(params?: Prisma.UserFindManyArgs): Promise<User[]> {
		return this.prisma.user.findMany(params)
	}

	async count(params?: Prisma.UserFindManyArgs): Promise<number> {
		const where = params?.where
		return this.prisma.user.count({ where })
	}

	async updateUser(id: string, data: Partial<User>): Promise<User> {
		return this.prisma.user.update({
			where: { id },
			data
		})
	}
}
