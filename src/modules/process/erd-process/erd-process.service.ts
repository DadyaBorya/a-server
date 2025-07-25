import { StorageService } from '@modules/libs/storage'
import { InjectQueue } from '@nestjs/bullmq'
import { BadRequestException, Injectable } from '@nestjs/common'
import { ERD_CONSUMER_PROCESS_NAME, ERD_PROCESS_QUEUE } from '@shared/constants'
import { Queue } from 'bullmq'
import { FileUpload } from 'graphql-upload'

import { Prisma, ProcessErd, ProcessType, Status } from '@/prisma/generated'

import { ProcessCoreService } from '../process-core'

import { ErdProcessRepository } from './erd.repository'
import { ErdRequestNotFoundException } from './exceptions'

@Injectable()
export class ErdProcessService {
	constructor(
		@InjectQueue(ERD_PROCESS_QUEUE)
		private readonly processQueue: Queue,
		private readonly storageService: StorageService,
		private readonly processService: ProcessCoreService,
		private readonly erdRepository: ErdProcessRepository
	) {}

	async createRequest(
		grantedІnputFile: FileUpload | null,
		acceptedІnputFile: FileUpload | null,
		userId: string,
		isAi?: boolean
	) {
		const request = await this.processService.createRequest(
			userId,
			ProcessType.ERD
		)

		try {
			const uploadedGrantedInputFile = grantedІnputFile
				? await this.storageService.create(
						grantedІnputFile,
						'/process/erd'
					)
				: null

			const uploadedAcceptedInputFile = acceptedІnputFile
				? await this.storageService.create(
						acceptedІnputFile,
						'/process/erd'
					)
				: null

			if (!uploadedAcceptedInputFile && !uploadedGrantedInputFile) {
				throw new BadRequestException()
			}

			await this.erdRepository.create({
				processId: request.id,
				grantedІnputFileId:
					uploadedGrantedInputFile && uploadedGrantedInputFile.id,
				acceptedІnputFileId:
					uploadedAcceptedInputFile && uploadedAcceptedInputFile.id,
				isAi
			})

			await this.processQueue.add(ERD_CONSUMER_PROCESS_NAME, {
				processId: request.id
			})

			return request.id
		} catch {
			await this.processService.update(request.id, {
				status: Status.ERROR
			})
		}
	}

	async findById(id: string, include?: Prisma.ProcessErdInclude) {
		const result = await this.erdRepository.findById(id, include)

		if (!result) {
			throw new ErdRequestNotFoundException()
		}

		return result
	}

	async update(id: string, data: Partial<ProcessErd>) {
		await this.findById(id)

		return this.erdRepository.update(id, data)
	}
}
