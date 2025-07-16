import { ProcessCoreService } from '@modules/process/process-core'
import { createOutputFilename } from '@modules/process/utils'
import { Injectable } from '@nestjs/common'
import { capitalizeFullName, getFullnameFromParts } from '@shared/utils'

import { HstsMvsCarInfoProcessor } from './hsts-mvs-car-info-processor'
import { HstsMvsDriverLicenceProcessor } from './hsts-mvs-driver-licence-processor'
import { HstsMvsErrorHandler } from './hsts-mvs-error-handler'
import { HstsMvsProcessDocx } from './hsts-mvs-process-docx'
import { HstsMvsProcessFinalizer } from './hsts-mvs-process-finalizer'
import { HstsMvsProcessInitializer } from './hsts-mvs-process-initializer'
import { HstsMvsProcessModifier } from './hsts-mvs-process-modifier'

@Injectable()
export class HstsMvsProcessHandler {
	constructor(
		private readonly processService: ProcessCoreService,
		private readonly initializer: HstsMvsProcessInitializer,
		private readonly driverLicenceProcessor: HstsMvsDriverLicenceProcessor,
		private readonly carInfoProcessor: HstsMvsCarInfoProcessor,
		private readonly modifier: HstsMvsProcessModifier,
		private readonly finalizer: HstsMvsProcessFinalizer,
		private readonly errorHandler: HstsMvsErrorHandler,
		private readonly docxProcess: HstsMvsProcessDocx
	) {}

	async process(processId: string): Promise<void> {
		try {
			const hstsMvsProcess = await this.initializer.initialize(processId)

			const driverLicenceData = await this.driverLicenceProcessor.process(
				processId,
				hstsMvsProcess
			)

			await this.updateOwnerInfo(processId, driverLicenceData)

			const carInfoData = await this.carInfoProcessor.process(
				processId,
				hstsMvsProcess,
				driverLicenceData.birthDate,
				getFullnameFromParts({ ...driverLicenceData })
			)

			const modifiedData = await this.modifier.modify(
				processId,
				driverLicenceData,
				carInfoData,
				hstsMvsProcess.isAi
			)

			const { lastName, firstName, patronymic } = driverLicenceData

			await this.docxProcess.process(
				processId,
				modifiedData,
				createOutputFilename(
					hstsMvsProcess.process.createdAt,
					capitalizeFullName(lastName, firstName, patronymic),
					'ГСЦ МВС'
				)
			)

			await this.finalizer.finalize(processId)
		} catch (error) {
			await this.errorHandler.handleError(processId, error)
		}
	}

	private async updateOwnerInfo(processId: string, driverLicenceData: any) {
		const { lastName, firstName, patronymic } = driverLicenceData

		await this.processService.update(processId, {
			owner: capitalizeFullName(lastName, firstName, patronymic)
		})
	}
}
