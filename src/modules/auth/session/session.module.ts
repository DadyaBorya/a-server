import { Module } from '@nestjs/common'

import { AccountModule } from '../account'

import { SessionResolver } from './session.resolver'
import { SessionService } from './session.service'

@Module({
	imports: [AccountModule],
	providers: [SessionResolver, SessionService]
})
export class SessionModule {}
