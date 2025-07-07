import { BadRequestException } from '@nestjs/common'

export class TotpNotEnabledException extends BadRequestException {
	constructor() {
		super({
			message:
				'Для виконання цього запиту необхідно увімкнути двофакторну автентифікацію (TOTP).',
			errorCode: 'TOTP_NOT_ENABLED'
		})
	}
}
