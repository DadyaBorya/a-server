import { Module } from '@nestjs/common'

import { ProcessResolver } from './process-core.resolver'
import { ProcessCoreService } from './process-core.service'
import { ProcessRepository } from './process.repository'

@Module({
	providers: [ProcessCoreService, ProcessRepository, ProcessResolver],
	exports: [ProcessCoreService]
})
export class ProcessCoreModule {}
