import { OllamaModule } from '@modules/libs/ollama'
import { StorageModule } from '@modules/libs/storage'
import { BullModule } from '@nestjs/bullmq'
import { Module } from '@nestjs/common'
import { PFU_PROCESS_QUEUE } from '@shared/constants'

import { ProcessCoreModule } from '../process-core'

import { PfuDocxGenerator } from './docx'
import { HANDLERS } from './handlers'
import { PARSERS } from './parsers'
import { PfuProcessController } from './pfu-process.controller'
import { PfuProcessResolver } from './pfu-process.resolver'
import { PfuProcessService } from './pfu-process.service'
import { PfuProcessConsumer } from './pfu.consumer'
import { PfuProcessRepository } from './pfu.repository'
import { TRANSFORMS } from './transform'
import { VALIDATORS } from './validators'

@Module({
	controllers: [PfuProcessController],
	imports: [
		ProcessCoreModule,
		StorageModule,
		OllamaModule,
		BullModule.registerQueue({
			name: PFU_PROCESS_QUEUE
		})
	],
	providers: [
		PfuProcessResolver,
		PfuProcessService,
		PfuProcessRepository,
		PfuProcessConsumer,
		PfuDocxGenerator,
		...HANDLERS,
		...PARSERS,
		...VALIDATORS,
		...TRANSFORMS
	]
})
export class PfuProcessModule {}
