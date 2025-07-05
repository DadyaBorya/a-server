import { applyDecorators, UseGuards } from '@nestjs/common'

import { GqlAuthGuard } from '../guards'

export function GqlAuthorization() {
	return applyDecorators(UseGuards(GqlAuthGuard))
}
