import { StorageService } from '@modules/libs/storage'
import { InjectQueue } from '@nestjs/bullmq'
import { Injectable } from '@nestjs/common'
import { Queue } from 'bullmq'
import { FileUpload } from 'graphql-upload'

import { Prisma, ProcessHstsMvs, ProcessType, Status } from '@/prisma/generated'
import {
	HSTS_MVS_CONSUMER_PROCESS_NAME,
	HSTS_MVS_PROCESS_QUEUE
} from '@/src/shared/constants'

import { ProcessCoreService } from '../process-core'

import { HstsMvsRequestNotFoundException } from './exceptions'
import { HstsMvsProcessRepository } from './hsts-mvs.repository'

@Injectable()
export class HstsMvsProcessService {
	constructor(
		@InjectQueue(HSTS_MVS_PROCESS_QUEUE)
		private readonly processQueue: Queue,
		private readonly storageService: StorageService,
		private readonly processService: ProcessCoreService,
		private readonly hstsMvsRepository: HstsMvsProcessRepository
	) {}

	async createRequest(
		driverLicenseFile: FileUpload,
		carInfoFile: FileUpload,
		userId: string,
		isAi?: boolean
	) {
		const request = await this.processService.createRequest(
			userId,
			ProcessType.HSTS_MVS
		)

		try {
			const uploadedDriverLicense = await this.storageService.create(
				driverLicenseFile,
				'/process/hsts-mvs'
			)

			const uploadedCarInfo = await this.storageService.create(
				carInfoFile,
				'/process/hsts-mvs'
			)

			await this.hstsMvsRepository.create({
				processId: request.id,
				driverLicenseFileId: uploadedDriverLicense.id,
				carInfoFileId: uploadedCarInfo.id,
				isAi
			})

			await this.processQueue.add(HSTS_MVS_CONSUMER_PROCESS_NAME, {
				processId: request.id
			})

			return request.id
		} catch {
			await this.processService.update(request.id, {
				status: Status.ERROR
			})
		}
	}

	async findById(id: string, include?: Prisma.ProcessHstsMvsInclude) {
		const result = await this.hstsMvsRepository.findById(id, include)

		if (!result) {
			throw new HstsMvsRequestNotFoundException()
		}

		return result
	}

	async update(id: string, data: Partial<ProcessHstsMvs>) {
		await this.findById(id)

		return this.hstsMvsRepository.update(id, data)
	}
}
