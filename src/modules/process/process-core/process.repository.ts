import { PrismaService } from '@core/prisma'
import { Injectable } from '@nestjs/common'

import { Prisma, Process, ProcessType } from '@/prisma/generated'

@Injectable()
export class ProcessRepository {
	constructor(private readonly prisma: PrismaService) {}

	async create(userId: string, type: ProcessType) {
		return this.prisma.process.create({
			data: {
				userId,
				type
			}
		})
	}

	async findMany(params?: Prisma.ProcessFindManyArgs) {
		return this.prisma.process.findMany(params)
	}

	async count(params?: Prisma.ProcessFindManyArgs): Promise<number> {
		const where = params?.where
		return this.prisma.process.count({ where })
	}

	async findById(id: string) {
		return this.prisma.process.findUnique({ where: { id } })
	}

	async update(id: string, data: Partial<Process>) {
		return this.prisma.process.update({ where: { id }, data })
	}
}
