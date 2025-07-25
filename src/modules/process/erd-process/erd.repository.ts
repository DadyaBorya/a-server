import { PrismaService } from '@core/prisma'
import { Injectable } from '@nestjs/common'

import { Prisma, ProcessErd } from '@/prisma/generated'

import { CreateErdProcessDto } from './dto'

@Injectable()
export class ErdProcessRepository {
	constructor(private readonly prisma: PrismaService) {}

	async create(dto: CreateErdProcessDto) {
		return this.prisma.processErd.create({ data: dto })
	}

	async findById(id: string, include?: Prisma.ProcessErdInclude) {
		return this.prisma.processErd.findUnique({
			where: { processId: id },
			include
		})
	}

	async update(id: string, data: Partial<ProcessErd>) {
		return this.prisma.processErd.update({
			where: { processId: id },
			data
		})
	}
}
