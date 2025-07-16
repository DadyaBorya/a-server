import { StorageModule } from '@modules/libs/storage'
import { BullModule } from '@nestjs/bullmq'
import { Module } from '@nestjs/common'
import { HSTS_MVS_PROCESS_QUEUE } from '@shared/constants'

import { ProcessCoreModule } from '../process-core'

import { HstsMvsDocxGenerator } from './docx'
import { HANDLERS } from './handlers'
import { HstsMvsProcessController } from './hsts-mvs-process.controller'
import { HstsMvsProcessResolver } from './hsts-mvs-process.resolver'
import { HstsMvsProcessService } from './hsts-mvs-process.service'
import { HstsMvsProcessConsumer } from './hsts-mvs.consumer'
import { HstsMvsProcessRepository } from './hsts-mvs.repository'
import { PARSERS } from './parsers'
import { TRANSFORMS } from './transform'
import { VALIDATORS } from './validators'

@Module({
	controllers: [HstsMvsProcessController],
	imports: [
		ProcessCoreModule,
		StorageModule,
		BullModule.registerQueue({
			name: HSTS_MVS_PROCESS_QUEUE
		})
	],
	providers: [
		HstsMvsProcessConsumer,
		HstsMvsProcessResolver,
		HstsMvsProcessService,
		HstsMvsProcessRepository,
		HstsMvsDocxGenerator,
		...VALIDATORS,
		...PARSERS,
		...TRANSFORMS,
		...HANDLERS
	]
})
export class HstsMvsProcessModule {}
