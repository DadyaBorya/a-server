import { StorageService } from '@modules/libs/storage'
import { InjectQueue } from '@nestjs/bullmq'
import { Injectable } from '@nestjs/common'
import { PFU_CONSUMER_PROCESS_NAME, PFU_PROCESS_QUEUE } from '@shared/constants'
import { Queue } from 'bullmq'
import { FileUpload } from 'graphql-upload'

import { Prisma, ProcessPfu, ProcessType, Status } from '@/prisma/generated'

import { ProcessCoreService } from '../process-core'

import { PfuRequestNotFoundException } from './exceptions'
import { PfuProcessRepository } from './pfu.repository'

@Injectable()
export class PfuProcessService {
	constructor(
		@InjectQueue(PFU_PROCESS_QUEUE)
		private readonly processQueue: Queue,
		private readonly storageService: StorageService,
		private readonly processService: ProcessCoreService,
		private readonly pfuRepository: PfuProcessRepository
	) {}

	async createRequest(inputFile: FileUpload, userId: string, isAi?: boolean) {
		const request = await this.processService.createRequest(
			userId,
			ProcessType.PFU
		)

		try {
			const uploadedInputFile = await this.storageService.create(
				inputFile,
				'/process/pfu'
			)

			await this.pfuRepository.create({
				processId: request.id,
				inputFileId: uploadedInputFile.id,
				isAi
			})

			await this.processQueue.add(PFU_CONSUMER_PROCESS_NAME, {
				processId: request.id
			})

			return request.id
		} catch {
			await this.processService.update(request.id, {
				status: Status.ERROR
			})
		}
	}

	async findById(id: string, include?: Prisma.ProcessPfuInclude) {
		const result = await this.pfuRepository.findById(id, include)

		if (!result) {
			throw new PfuRequestNotFoundException()
		}

		return result
	}

	async update(id: string, data: Partial<ProcessPfu>) {
		await this.findById(id)

		return this.pfuRepository.update(id, data)
	}
}
