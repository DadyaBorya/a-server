import { ProcessCoreService } from '@modules/process/process-core'
import { Injectable } from '@nestjs/common'

import { PfuStage, Status } from '@/prisma/generated'

import { PfuProcessService } from '../pfu-process.service'

@Injectable()
export class PfuInitializerHandler {
	constructor(
		private readonly processService: ProcessCoreService,
		private readonly pfuService: PfuProcessService
	) {}

	async initialize(processId: string) {
		const pfuProcess = await this.pfuService.findById(processId, {
			process: true,
			inputFile: true
		})

		await Promise.all([
			this.processService.update(processId, {
				status: Status.STARTED
			}),
			this.pfuService.update(processId, {
				stage: PfuStage.PARSE_INPUT_FILE
			})
		])

		return pfuProcess
	}
}
