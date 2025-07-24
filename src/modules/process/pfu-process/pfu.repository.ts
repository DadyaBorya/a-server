import { PrismaService } from '@core/prisma'
import { Injectable } from '@nestjs/common'

import { Prisma, ProcessPfu } from '@/prisma/generated'

import { CreatePfuProcessDto } from './dto'

@Injectable()
export class PfuProcessRepository {
	constructor(private readonly prisma: PrismaService) {}

	async create(dto: CreatePfuProcessDto) {
		return this.prisma.processPfu.create({ data: dto })
	}

	async findById(id: string, include?: Prisma.ProcessPfuInclude) {
		return this.prisma.processPfu.findUnique({
			where: { processId: id },
			include
		})
	}

	async update(id: string, data: Partial<ProcessPfu>) {
		return this.prisma.processPfu.update({
			where: { processId: id },
			data
		})
	}
}
