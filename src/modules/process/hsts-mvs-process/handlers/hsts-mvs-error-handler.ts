import { ProcessCoreService } from '@modules/process/process-core'
import { Injectable } from '@nestjs/common'

import { Status } from '@/prisma/generated'

import { HstsMvsProcessService } from '../hsts-mvs-process.service'

@Injectable()
export class HstsMvsErrorHandler {
	constructor(
		private readonly processService: ProcessCoreService,
		private readonly hstsMvsSerive: HstsMvsProcessService
	) {}

	async handleError(processId: string, error: Error) {
		await Promise.all([
			this.processService.update(processId, {
				status: Status.ERROR,
				finishedAt: new Date()
			}),
			this.hstsMvsSerive.update(processId, {
				errorMessage: error.message
			})
		])
	}
}
