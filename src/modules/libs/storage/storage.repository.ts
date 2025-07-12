import { PrismaService } from '@core/prisma'
import { Injectable } from '@nestjs/common'

import { CreateStorageFileDto } from './dto'

@Injectable()
export class StorageRepository {
	constructor(private readonly prisma: PrismaService) {}

	async create(dto: CreateStorageFileDto) {
		return this.prisma.storageFile.create({ data: dto })
	}
}
