import { BadRequestException } from '@nestjs/common'

export class TotpNotEnabledException extends BadRequestException {
	constructor() {
		super({
			message: 'Двофакторна автентифікація ще не увімкнена.',
			errorCode: 'TOTP_NOT_ENABLED'
		})
	}
}
