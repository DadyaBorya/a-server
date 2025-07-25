import { StorageModule } from '@modules/libs/storage'
import { BullModule } from '@nestjs/bullmq'
import { Module } from '@nestjs/common'
import { ERD_PROCESS_QUEUE } from '@shared/constants'

import { ProcessCoreModule } from '../process-core'

import { ErdProcessController } from './erd-process.controller'
import { ErdProcessResolver } from './erd-process.resolver'
import { ErdProcessService } from './erd-process.service'
import { ErdProcessConsumer } from './erd.consumer'
import { ErdProcessRepository } from './erd.repository'
import { HANDLERS } from './handlers'

@Module({
	controllers: [ErdProcessController],
	imports: [
		BullModule.registerQueue({
			name: ERD_PROCESS_QUEUE
		}),
		StorageModule,
		ProcessCoreModule
	],
	providers: [
		ErdProcessResolver,
		ErdProcessService,
		ErdProcessRepository,
		ErdProcessConsumer,
		...HANDLERS
	]
})
export class ErdProcessModule {}
