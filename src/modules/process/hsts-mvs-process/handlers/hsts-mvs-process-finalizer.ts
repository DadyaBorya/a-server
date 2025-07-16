import { ProcessCoreService } from '@modules/process/process-core'
import { Injectable } from '@nestjs/common'

import { HstsMvsStage, Status } from '@/prisma/generated'

import { HstsMvsProcessService } from '../hsts-mvs-process.service'

@Injectable()
export class HstsMvsProcessFinalizer {
	constructor(
		private readonly processService: ProcessCoreService,
		private readonly hstsMvsSerive: HstsMvsProcessService
	) {}

	async finalize(processId: string) {
		await this.hstsMvsSerive.update(processId, {
			stage: HstsMvsStage.FINISHED
		})

		await this.processService.update(processId, {
			status: Status.END,
			finishedAt: new Date()
		})
	}
}
