import { Injectable } from '@nestjs/common'

import { Prisma, ProcessHstsMvs } from '@/prisma/generated'
import { PrismaService } from '@/src/core/prisma'

import { CreateHstsMsvProcessDto } from './dto'

@Injectable()
export class HstsMvsProcessRepository {
	constructor(private readonly prisma: PrismaService) {}

	async create(dto: CreateHstsMsvProcessDto) {
		return this.prisma.processHstsMvs.create({ data: dto })
	}

	async findById(id: string, include?: Prisma.ProcessHstsMvsInclude) {
		return this.prisma.processHstsMvs.findUnique({
			where: { processId: id },
			include
		})
	}

	async update(id: string, data: Partial<ProcessHstsMvs>) {
		return this.prisma.processHstsMvs.update({
			where: { processId: id },
			data
		})
	}
}
