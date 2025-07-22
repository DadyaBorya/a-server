import { ProcessCoreService } from '@modules/process/process-core'
import { createOutputFilename } from '@modules/process/utils'
import { Injectable } from '@nestjs/common'
import {
	capitalizeFullName,
	getFullnameFromParts,
	parseFullName
} from '@shared/utils'

import { HstsMvsCarInfoProcessorHandler } from './car-info-processor.handler'
import { HstsMvsDocxHandler } from './docx.handler'
import { HstsMvsDriverLicenceProcessorHandler } from './driver-licence-processor.handler'
import { HstsMvsErrorHandler } from './error.handler'
import { HstsMvsFinalizerHandler } from './finalizer.handler'
import { HstsMvsInitializerHandler } from './initializer.handler'
import { HstsMvsModifierHandler } from './modifier.handler'

@Injectable()
export class HstsMvsProcessHandler {
	constructor(
		private readonly processService: ProcessCoreService,
		private readonly initializer: HstsMvsInitializerHandler,
		private readonly driverLicenceProcessor: HstsMvsDriverLicenceProcessorHandler,
		private readonly carInfoProcessor: HstsMvsCarInfoProcessorHandler,
		private readonly modifier: HstsMvsModifierHandler,
		private readonly finalizer: HstsMvsFinalizerHandler,
		private readonly errorHandler: HstsMvsErrorHandler,
		private readonly docxProcess: HstsMvsDocxHandler
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

			const carInfoData = await this.carInfoProcessor.process(
				processId,
				hstsMvsProcess,
				driverLicenceData?.birthDate,
				driverLicenceData
					? getFullnameFromParts(driverLicenceData)
					: undefined
			)

			const fullName = Array.isArray(carInfoData)
				? carInfoData[0].fullName
				: carInfoData.fullName
			const { lastName, firstName, patronymic } = parseFullName(fullName)
			const capitalizedFullName = capitalizeFullName(
				lastName,
				firstName,
				patronymic
			)

			const ownerName = driverLicenceData
				? capitalizeFullName(
						driverLicenceData.firstName,
						driverLicenceData.lastName,
						driverLicenceData.patronymic
					)
				: capitalizedFullName

			await this.processService.update(processId, { owner: ownerName })

			const modifiedData = await this.modifier.modify(
				processId,
				carInfoData,
				hstsMvsProcess.isAi,
				driverLicenceData
			)

			await this.docxProcess.process(
				processId,
				modifiedData,
				createOutputFilename(
					hstsMvsProcess.process.createdAt,
					capitalizeFullName(lastName, firstName, patronymic),
					'ГСЦ МВС',
					'docx'
				)
			)

			await this.finalizer.finalize(processId)
		} catch (error) {
			await this.errorHandler.handleError(processId, error)
		}
	}
}
