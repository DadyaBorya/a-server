import { StorageService } from '@modules/libs/storage'
import { InjectQueue } from '@nestjs/bullmq'
import { Injectable } from '@nestjs/common'
import {
	DMSU_CONSUMER_PROCESS_NAME,
	DMSU_PROCESS_QUEUE
} from '@shared/constants'
import { Queue } from 'bullmq'
import { FileUpload } from 'graphql-upload'

import { Prisma, ProcessDmsu, ProcessType, Status } from '@/prisma/generated'

import { ProcessCoreService } from '../process-core'

import { DmsuProcessRepository } from './dmsu.repository'
import { DmsuRequestNotFoundException } from './exceptions'

@Injectable()
export class DmsuProcessService {
	constructor(
		@InjectQueue(DMSU_PROCESS_QUEUE)
		private readonly processQueue: Queue,
		private readonly processService: ProcessCoreService,
		private readonly storageService: StorageService,
		private readonly dmsuRepository: DmsuProcessRepository
	) {}

	async createRequest(
		personInfoFile: FileUpload,
		userId: string,
		isAi?: boolean
	) {
		const request = await this.processService.createRequest(
			userId,
			ProcessType.DMSU
		)

		try {
			const uploadedPersonInfo = await this.storageService.create(
				personInfoFile,
				'/process/dmsu'
			)

			await this.dmsuRepository.create({
				processId: request.id,
				personInfoFileId: uploadedPersonInfo.id,
				isAi
			})

			await this.processQueue.add(DMSU_CONSUMER_PROCESS_NAME, {
				processId: request.id
			})

			return request.id
		} catch {
			await this.processService.update(request.id, {
				status: Status.ERROR
			})
		}
	}

	async findById(id: string, include?: Prisma.ProcessDmsuInclude) {
		const result = await this.dmsuRepository.findById(id, include)

		if (!result) {
			throw new DmsuRequestNotFoundException()
		}

		return result
	}

	async update(id: string, data: Partial<ProcessDmsu>) {
		await this.findById(id)

		return this.dmsuRepository.update(id, data)
	}
}
