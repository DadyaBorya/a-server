import { StorageModule } from '@modules/libs/storage'
import { Module } from '@nestjs/common'

import { ProcessCoreModule } from '../process-core'

import { HstsMsvProcessRepository } from './hsts-msv.repository'
import { HstsMvsProcessResolver } from './hsts-mvs-process.resolver'
import { HstsMvsProcessService } from './hsts-mvs-process.service'

@Module({
	imports: [ProcessCoreModule, StorageModule],
	providers: [
		HstsMvsProcessResolver,
		HstsMvsProcessService,
		HstsMsvProcessRepository
	]
})
export class HstsMvsProcessModule {}
