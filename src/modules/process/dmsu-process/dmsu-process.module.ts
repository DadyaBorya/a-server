import { OllamaModule } from '@modules/libs/ollama'
import { StorageModule } from '@modules/libs/storage'
import { UtilsServerModule } from '@modules/libs/utils-server'
import { BullModule } from '@nestjs/bullmq'
import { Module } from '@nestjs/common'
import { DMSU_PROCESS_QUEUE } from '@shared/constants'

import { ProcessCoreModule } from '../process-core'

import { DmsuProcessController } from './dmsu-process.controller'
import { DmsuProcessResolver } from './dmsu-process.resolver'
import { DmsuProcessService } from './dmsu-process.service'
import { DmsuProcessConsumer } from './dmsu.consumer'
import { DmsuProcessRepository } from './dmsu.repository'
import { DmsuDocxGenerator } from './docx'
import { HANDLERS } from './handlers'
import { PARSERS } from './parsers'
import { VALIDATORS } from './validators'

@Module({
	controllers: [DmsuProcessController],
	imports: [
		ProcessCoreModule,
		StorageModule,
		BullModule.registerQueue({
			name: DMSU_PROCESS_QUEUE
		}),
		UtilsServerModule,
		OllamaModule
	],
	providers: [
		DmsuProcessResolver,
		DmsuProcessService,
		DmsuProcessConsumer,
		DmsuProcessRepository,
		DmsuDocxGenerator,
		...PARSERS,
		...HANDLERS,
		...VALIDATORS
	]
})
export class DmsuProcessModule {}
