import { ProcessCoreService } from '@modules/process/process-core'
import { createOutputFilename } from '@modules/process/utils'
import { Injectable } from '@nestjs/common'
import {
	capitalizeFullName,
	getFullnameFromParts,
	parseFullName
} from '@shared/utils'

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

			const driverLicenceData = hstsMvsProcess.driverLicenseFileId
				? await this.driverLicenceProcessor.process(
						processId,
						hstsMvsProcess
					)
				: null

			if (driverLicenceData) {
				await this.updateOwnerInfo(processId, driverLicenceData)
			}

			const carInfoData = await this.carInfoProcessor.process(
				processId,
				hstsMvsProcess,
				driverLicenceData && driverLicenceData.birthDate,
				driverLicenceData &&
					getFullnameFromParts({ ...driverLicenceData })
			)

			const modifiedData = await this.modifier.modify(
				processId,
				carInfoData,
				hstsMvsProcess.isAi,
				driverLicenceData
			)

			let fullname: string

			if (Array.isArray(carInfoData)) {
				fullname = carInfoData[0].fullName
			} else {
				fullname = carInfoData.fullName
			}

			const { lastName, firstName, patronymic } = parseFullName(fullname)

			if (!driverLicenceData) {
				await this.updateOwnerInfo(processId, {
					lastName,
					firstName,
					patronymic
				})
			}

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

	private async updateOwnerInfo(
		processId: string,
		name: { lastName: string; firstName: string; patronymic: string }
	) {
		const { lastName, firstName, patronymic } = name

		await this.processService.update(processId, {
			owner: capitalizeFullName(lastName, firstName, patronymic)
		})
	}
}
