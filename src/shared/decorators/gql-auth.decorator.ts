import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'

import { GqlAuthGuard, SKIP_TOTP_CHECK } from '../guards'

export function GqlAuthorization(options?: { skipTotpCheck?: boolean }) {
	const decorators = [UseGuards(GqlAuthGuard)]

	if (options?.skipTotpCheck) {
		decorators.push(SetMetadata(SKIP_TOTP_CHECK, true))
	}

	return applyDecorators(...decorators)
}
