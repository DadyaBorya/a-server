import { ProcessCoreService } from '@modules/process/process-core'
import { Injectable } from '@nestjs/common'

import { Status } from '@/prisma/generated'

import { ErdProcessService } from '../erd-process.service'

@Injectable()
export class ErdErrorHandler {
	constructor(
		private readonly processService: ProcessCoreService,
		private readonly erdService: ErdProcessService
	) {}

	async handleError(processId: string, error: Error) {
		await Promise.all([
			this.processService.update(processId, {
				status: Status.ERROR,
				finishedAt: new Date()
			}),
			this.erdService.update(processId, {
				errorMessage: error.message
			})
		])
	}
}
