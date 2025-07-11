import { AccountModule } from '@modules/users/account'
import { Module } from '@nestjs/common'

import { TotpResolver } from './totp.resolver'
import { TotpService } from './totp.service'

@Module({
	imports: [AccountModule],
	providers: [TotpResolver, TotpService],
	exports: [TotpService]
})
export class TotpModule {}
