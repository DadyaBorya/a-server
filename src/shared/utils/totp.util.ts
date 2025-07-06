import { TOTP } from 'otpauth'

import { TotpInvalidPinException } from '../exceptions'

export function createTotp(username: string, secret: string) {
	return new TOTP({
		issuer: 'AnalysisPlus',
		label: username,
		algorithm: 'SHA1',
		digits: 6,
		secret
	})
}

export function validateTotp(totp: TOTP, token: string) {
	const delta = totp.validate({ token })

	if (delta === null) {
		throw new TotpInvalidPinException()
	}
}
