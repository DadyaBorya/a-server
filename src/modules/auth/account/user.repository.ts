import { Injectable } from '@nestjs/common'
import { User } from '@prisma/generated'

import { PrismaService } from '@/src/core/prisma'

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

	async findMany(): Promise<User[]> {
		return this.prisma.user.findMany()
	}

	async updateUser(id: string, data: Partial<User>): Promise<User> {
		return this.prisma.user.update({
			where: { id },
			data
		})
	}
}
