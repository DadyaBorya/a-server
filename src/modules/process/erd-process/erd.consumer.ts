import { Processor, WorkerHost } from '@nestjs/bullmq'
import { ERD_CONSUMER_PROCESS_NAME, ERD_PROCESS_QUEUE } from '@shared/constants'
import { Job } from 'bullmq'

import { ErdProcessHandler } from './handlers'

@Processor(ERD_PROCESS_QUEUE)
export class ErdProcessConsumer extends WorkerHost {
	constructor(private readonly processHandler: ErdProcessHandler) {
		super()
	}

	async process(job: Job): Promise<void> {
		if (job.name === ERD_CONSUMER_PROCESS_NAME) {
			await this.processHandler.process(job.data.processId)
		}
	}
}
