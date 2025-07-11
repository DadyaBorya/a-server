import { Module } from '@nestjs/common'

import { AccountResolver } from './account.resolver'
import { AccountService } from './account.service'
import { UserRepository } from './user.repository'

@Module({
	providers: [AccountResolver, AccountService, UserRepository],
	exports: [AccountService]
})
export class AccountModule {}
