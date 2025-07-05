import { TOTP } from 'otpauth'

import { TotpInvalidPinException } from '../exceptions'

export function validateTotp(totp: TOTP, token: string) {
	const delta = totp.validate({ token })

	if (delta === null) {
		throw new TotpInvalidPinException()
	}
}
