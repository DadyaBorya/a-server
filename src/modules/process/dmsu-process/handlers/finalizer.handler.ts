import { ProcessCoreService } from '@modules/process/process-core'
import { Injectable } from '@nestjs/common'

import { DmsuStage, Status } from '@/prisma/generated'

import { DmsuProcessService } from '../dmsu-process.service'

@Injectable()
export class DmsuFinalizerHandler {
	constructor(
		private readonly processService: ProcessCoreService,
		private readonly dmsuService: DmsuProcessService
	) {}

	async finalize(processId: string) {
		await this.dmsuService.update(processId, {
			stage: DmsuStage.FINISHED
		})

		await this.processService.update(processId, {
			status: Status.END,
			finishedAt: new Date()
		})
	}
}
