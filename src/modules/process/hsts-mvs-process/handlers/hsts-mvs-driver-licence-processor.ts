import { Injectable } from '@nestjs/common'

import { HstsMvsStage } from '@/prisma/generated'
import { StorageService } from '@/src/modules/libs/storage'

import { DRIVER_LICENCE_CELLS } from '../constants'
import { HstsMvsProcessService } from '../hsts-mvs-process.service'
import { DriverLicenceParser } from '../parsers'
import { DriverLicenceTransform } from '../transform'
import { DriverLicenceValidator } from '../validators'

@Injectable()
export class HstsMvsDriverLicenceProcessor {
	constructor(
		private readonly storage: StorageService,
		private readonly hstsMvsSerive: HstsMvsProcessService,
		private readonly driverLicenceParser: DriverLicenceParser,
		private readonly driverLicenceTransform: DriverLicenceTransform,
		private readonly driverLicenceValidator: DriverLicenceValidator
	) {}

	async process(processId: string, hstsMvsProcess: any) {
		const driverLicenseBuffer = await this.storage.findBufferById(
			hstsMvsProcess.driverLicenseFileId
		)

		const driverLicenceParsedListData =
			await this.driverLicenceParser.parseList(
				driverLicenseBuffer.buffer,
				DRIVER_LICENCE_CELLS,
				5
			)

		const driverLicenceParsedData = this.driverLicenceTransform.transform(
			driverLicenceParsedListData,
			DRIVER_LICENCE_CELLS
		)

		await this.hstsMvsSerive.update(processId, {
			stage: HstsMvsStage.VALIDATE_DRIVER_LICENCE
		})

		return this.driverLicenceValidator.validate(driverLicenceParsedData)
	}
}
