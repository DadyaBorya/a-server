import { Processor, WorkerHost } from '@nestjs/bullmq'
import {
	HSTS_MVS_CONSUMER_PROCESS_NAME,
	HSTS_MVS_PROCESS_QUEUE
} from '@shared/constants'
import { Job } from 'bullmq'

import { HstsMvsProcessHandler } from './handlers'

@Processor(HSTS_MVS_PROCESS_QUEUE)
export class HstsMvsProcessConsumer extends WorkerHost {
	constructor(private readonly processHandler: HstsMvsProcessHandler) {
		super()
	}

	async process(job: Job): Promise<void> {
		if (job.name === HSTS_MVS_CONSUMER_PROCESS_NAME) {
			await this.processHandler.process(job.data.processId)
		}
	}
}
