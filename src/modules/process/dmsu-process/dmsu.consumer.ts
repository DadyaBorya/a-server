import { Processor, WorkerHost } from '@nestjs/bullmq'
import {
	DMSU_CONSUMER_PROCESS_NAME,
	DMSU_PROCESS_QUEUE
} from '@shared/constants'
import { Job } from 'bullmq'

import { DmsuProcessHandler } from './handlers'

@Processor(DMSU_PROCESS_QUEUE)
export class DmsuProcessConsumer extends WorkerHost {
	constructor(private readonly processHandler: DmsuProcessHandler) {
		super()
	}

	async process(job: Job): Promise<void> {
		if (job.name === DMSU_CONSUMER_PROCESS_NAME) {
			await this.processHandler.process(job.data.processId)
		}
	}
}
