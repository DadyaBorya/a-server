import { Injectable } from '@nestjs/common'
import { Process, ProcessType } from '@prisma/generated'

import { ProcessRepository } from './process.repository'

@Injectable()
export class ProcessCoreService {
	constructor(private readonly processRepository: ProcessRepository) {}

	async createRequest(userId: string, type: ProcessType) {
		return this.processRepository.create(userId, type)
	}

	async update(id: string, data: Partial<Process>) {
		return this.processRepository.update(id, data)
	}
}
