import { StorageService } from '@modules/libs/storage'
import { Injectable } from '@nestjs/common'
import { FileUpload } from 'graphql-upload'

import { ProcessType, Status } from '@/prisma/generated'

import { ProcessCoreService } from '../process-core'

import { HstsMsvProcessRepository } from './hsts-msv.repository'

@Injectable()
export class HstsMvsProcessService {
	constructor(
		private readonly storageService: StorageService,
		private readonly processService: ProcessCoreService,
		private readonly hstsMvsRepository: HstsMsvProcessRepository
	) {}

	async createRequest(
		driverLicenseFile: FileUpload,
		carInfoFile: FileUpload,
		userId: string
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
				carInfoFileId: uploadedCarInfo.id
			})

			return request.id
		} catch {
			await this.processService.update(request.id, {
				status: Status.ERROR
			})
		}
	}
}
