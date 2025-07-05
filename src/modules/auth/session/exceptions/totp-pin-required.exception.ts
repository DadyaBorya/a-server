import { BadRequestException } from '@nestjs/common'

export class TotpPinRequiredException extends BadRequestException {
	constructor() {
		super({
			message:
				'Для входу потрібен одноразовий код з додатку двофакторної автентифікації.',
			errorCode: 'TOTP_PIN_REQUIRED'
		})
	}
}
