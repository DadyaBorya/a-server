import { Module } from '@nestjs/common'

import { ProcessCoreService } from './process-core.service'
import { ProcessRepository } from './process.repository'

@Module({
	providers: [ProcessCoreService, ProcessRepository],
	exports: [ProcessCoreService]
})
export class ProcessCoreModule {}
