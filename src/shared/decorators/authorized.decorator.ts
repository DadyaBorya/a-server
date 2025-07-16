import { createParamDecorator, ExecutionContext } from '@nestjs/common'

import { User } from '@/prisma/generated'

export const Authorized = createParamDecorator(
	(data: keyof User, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest()
		const user: User = request.user

		return data ? user[data] : user
	}
)
