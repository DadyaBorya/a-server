import { UseGuards } from '@nestjs/common'
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import { GqlAuthorization, UserAgent } from '@shared/decorators'
import { GqlContext } from '@shared/types'

import { GqlRemoveSessionGuard } from './guards'
import { LoginInput } from './input'
import { SessionModel } from './models'
import { SessionService } from './session.service'

@Resolver('Session')
export class SessionResolver {
	constructor(private readonly sessionService: SessionService) {}

	// Знайти всі сесії користувача який робе запит
	@GqlAuthorization()
	@Query(() => [SessionModel], { name: 'findSessions' })
	async findSessions(@Context() { request }: GqlContext) {
		return this.sessionService.findSessions(
			request.session.userId,
			request.session.id
		)
	}

	// Знайти поточну сесію користувача який робе запит
	@GqlAuthorization()
	@Query(() => SessionModel, { name: 'findCurrentSession' })
	async findCurrent(@Context() { request }: GqlContext) {
		return this.sessionService.findCurrent(request)
	}

	// Логін
	@Mutation(() => Boolean, { name: 'login' })
	async login(
		@Context() { request }: GqlContext,
		@Args('data') input: LoginInput,
		@UserAgent() userAgent: string
	) {
		return this.sessionService.login(request, input, userAgent)
	}

	// Логаут
	@GqlAuthorization()
	@Mutation(() => Boolean, { name: 'logout' })
	async logout(@Context() { request }: GqlContext) {
		return this.sessionService.logout(request)
	}

	// Очистити куку
	@Mutation(() => Boolean, { name: 'clearSessionCookie' })
	async clearSession(@Context() { request }: GqlContext) {
		return this.sessionService.clearSession(request)
	}

	// Видалити сесію окрім поточної
	@UseGuards(GqlRemoveSessionGuard)
	@GqlAuthorization()
	@Mutation(() => Boolean, { name: 'removeSession' })
	async remove(@Context() { request }: GqlContext, @Args('id') id: string) {
		return this.sessionService.remove(request, id)
	}
}
