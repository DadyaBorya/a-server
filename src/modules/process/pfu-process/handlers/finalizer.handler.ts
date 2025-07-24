import { ProcessCoreService } from '@modules/process/process-core'
import { Injectable } from '@nestjs/common'

import { PfuStage, Status } from '@/prisma/generated'

import { PfuProcessService } from '../pfu-process.service'

@Injectable()
export class PfuFinalizerHandler {
	constructor(
		private readonly processService: ProcessCoreService,
		private readonly pfuService: PfuProcessService
	) {}

	async finalize(processId: string) {
		await this.pfuService.update(processId, {
			stage: PfuStage.FINISHED
		})

		await this.processService.update(processId, {
			status: Status.END,
			finishedAt: new Date()
		})
	}
}
