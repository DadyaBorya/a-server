import { ProcessCoreService } from '@modules/process/process-core'
import { Injectable } from '@nestjs/common'

import { DmsuStage, Status } from '@/prisma/generated'

import { ErdProcessService } from '../erd-process.service'

@Injectable()
export class ErdFinalizerHandler {
	constructor(
		private readonly processService: ProcessCoreService,
		private readonly erdService: ErdProcessService
	) {}

	async finalize(processId: string) {
		await this.erdService.update(processId, {
			stage: DmsuStage.FINISHED
		})

		await this.processService.update(processId, {
			status: Status.END,
			finishedAt: new Date()
		})
	}
}
