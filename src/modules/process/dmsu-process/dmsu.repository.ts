import { PrismaService } from '@core/prisma'
import { Injectable } from '@nestjs/common'
import { Prisma, ProcessDmsu } from '@prisma/generated'

import { CreateDmsuProcessDto } from './dto'

@Injectable()
export class DmsuProcessRepository {
	constructor(private readonly prisma: PrismaService) {}

	async create(dto: CreateDmsuProcessDto) {
		return this.prisma.processDmsu.create({ data: dto })
	}

	async findById(id: string, include?: Prisma.ProcessDmsuInclude) {
		return this.prisma.processDmsu.findUnique({
			where: { processId: id },
			include
		})
	}

	async update(id: string, data: Partial<ProcessDmsu>) {
		return this.prisma.processDmsu.update({
			where: { processId: id },
			data
		})
	}
}
