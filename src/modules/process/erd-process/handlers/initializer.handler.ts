import { ProcessCoreService } from '@modules/process/process-core'
import { Injectable } from '@nestjs/common'

import { Status } from '@/prisma/generated'

import { ErdProcessService } from '../erd-process.service'

@Injectable()
export class ErdInitializerHandler {
	constructor(
		private readonly processService: ProcessCoreService,
		private readonly erdService: ErdProcessService
	) {}

	async initialize(processId: string) {
		const erdProcess = await this.erdService.findById(processId, {
			process: true,
			grantedІnputFile: true,
			acceptedІnputFile: true
		})

		this.processService.update(processId, {
			status: Status.STARTED
		})

		return erdProcess
	}
}
