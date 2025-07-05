import { TOTP } from 'otpauth'

export function createTotp(username: string, secret: string) {
	return new TOTP({
		issuer: 'AnalysisPlus',
		label: username,
		algorithm: 'SHA1',
		digits: 6,
		secret
	})
}
