import { ProcessCoreService } from '@modules/process/process-core'
import { Injectable } from '@nestjs/common'

import { HstsMvsStage, Status } from '@/prisma/generated'

import { HstsMvsProcessService } from '../hsts-mvs-process.service'

@Injectable()
export class HstsMvsProcessInitializer {
	constructor(
		private readonly processService: ProcessCoreService,
		private readonly hstsMvsSerive: HstsMvsProcessService
	) {}

	async initialize(processId: string) {
		const hstsMvsProcess = await this.hstsMvsSerive.findById(processId, {
			process: true,
			carInfoFile: true,
			driverLicenseFile: true
		})

		await Promise.all([
			this.processService.update(processId, {
				status: Status.STARTED
			}),
			this.hstsMvsSerive.update(processId, {
				stage: HstsMvsStage.PARSE_DRIVER_LICENCE
			})
		])

		return hstsMvsProcess
	}
}
