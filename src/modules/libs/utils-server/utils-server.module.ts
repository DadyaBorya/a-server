import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'

import { UtilsServerService } from './utils-server.service'

@Module({
	imports: [HttpModule],
	providers: [UtilsServerService],
	exports: [UtilsServerService]
})
export class UtilsServerModule {}
