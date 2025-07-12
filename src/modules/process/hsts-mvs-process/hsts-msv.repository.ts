import { Injectable } from '@nestjs/common'

import { PrismaService } from '@/src/core/prisma'

import { CreateHstsMsvProcessDto } from './dto'

@Injectable()
export class HstsMsvProcessRepository {
	constructor(private readonly prisma: PrismaService) {}

	async create(dto: CreateHstsMsvProcessDto) {
		return this.prisma.processHstsMvs.create({ data: dto })
	}
}
