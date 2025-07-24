import { Processor, WorkerHost } from '@nestjs/bullmq'
import { PFU_CONSUMER_PROCESS_NAME, PFU_PROCESS_QUEUE } from '@shared/constants'
import { Job } from 'bullmq'

import { PfuProcessHandler } from './handlers'

@Processor(PFU_PROCESS_QUEUE)
export class PfuProcessConsumer extends WorkerHost {
	constructor(private readonly processHandler: PfuProcessHandler) {
		super()
	}

	async process(job: Job): Promise<void> {
		if (job.name === PFU_CONSUMER_PROCESS_NAME) {
			await this.processHandler.process(job.data.processId)
		}
	}
}
