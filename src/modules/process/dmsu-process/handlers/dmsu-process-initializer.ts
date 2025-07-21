import { ProcessCoreService } from '@modules/process/process-core'
import { Injectable } from '@nestjs/common'

import { DmsuStage, Status } from '@/prisma/generated'

import { DmsuProcessService } from '../dmsu-process.service'

@Injectable()
export class DmsuProcessInitializer {
	constructor(
		private readonly processService: ProcessCoreService,
		private readonly dmsuSerive: DmsuProcessService
	) {}

	async initialize(processId: string) {
		const dmsuProcess = await this.dmsuSerive.findById(processId, {
			process: true,
			personInfoFile: true
		})

		await Promise.all([
			this.processService.update(processId, {
				status: Status.STARTED
			}),
			this.dmsuSerive.update(processId, {
				stage: DmsuStage.EXTRACT_IMAGE_AND_REMOVE_WATER_MARK
			})
		])

		return dmsuProcess
	}
}
