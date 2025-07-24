import { ProcessCoreService } from '@modules/process/process-core'
import { Injectable } from '@nestjs/common'

import { Status } from '@/prisma/generated'

import { PfuProcessService } from '../pfu-process.service'

@Injectable()
export class PfuErrorHandler {
	constructor(
		private readonly processService: ProcessCoreService,
		private readonly pfuService: PfuProcessService
	) {}

	async handleError(processId: string, error: Error) {
		await Promise.all([
			this.processService.update(processId, {
				status: Status.ERROR,
				finishedAt: new Date()
			}),
			this.pfuService.update(processId, {
				errorMessage: error.message
			})
		])
	}
}
