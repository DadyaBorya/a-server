import { ProcessCoreService } from '@modules/process/process-core'
import { Injectable } from '@nestjs/common'

import { Status } from '@/prisma/generated'

import { DmsuProcessService } from '../dmsu-process.service'

@Injectable()
export class DmsuErrorHandler {
	constructor(
		private readonly processService: ProcessCoreService,
		private readonly dmsuService: DmsuProcessService
	) {}

	async handleError(processId: string, error: Error) {
		console.log(error)

		await Promise.all([
			this.processService.update(processId, {
				status: Status.ERROR,
				finishedAt: new Date()
			}),
			this.dmsuService.update(processId, {
				errorMessage: error.message
			})
		])
	}
}
