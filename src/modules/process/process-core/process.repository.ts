import { PrismaService } from '@core/prisma'
import { Injectable } from '@nestjs/common'

import { Process, ProcessType } from '@/prisma/generated'

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

	async update(id: string, data: Partial<Process>) {
		return this.prisma.process.update({ where: { id }, data })
	}
}
