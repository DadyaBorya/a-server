import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Permission, User } from '@/prisma/generated'
import {
	GqlAuthorization,
	GqlAuthorized,
	GqlAuthorizedWithPermissions
} from '@/src/shared/decorators'

import { EnableTotpInput } from './inputs'
import { TotpModel } from './models'
import { TotpService } from './totp.service'

@Resolver('Totp')
export class TotpResolver {
	constructor(private readonly totpService: TotpService) {}

	@GqlAuthorization({ skipTotpCheck: true })
	@Query(() => TotpModel, { name: 'generateTotpSecret' })
	async generate(@GqlAuthorized() user: User) {
		return this.totpService.generate(user)
	}

	@GqlAuthorization({ skipTotpCheck: true })
	@Mutation(() => Boolean, { name: 'enableTotp' })
	async enable(
		@GqlAuthorized() user: User,
		@Args('data') input: EnableTotpInput
	) {
		return this.totpService.enable(user, input)
	}

	@GqlAuthorizedWithPermissions(Permission.USER_UPDATE)
	@Mutation(() => Boolean, { name: 'disabledTotp' })
	async disable(@Args('userId') userId: string) {
		return this.totpService.disable(userId)
	}
}
