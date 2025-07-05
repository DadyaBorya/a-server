import { BadRequestException } from '@nestjs/common'

export class TotpInvalidPinException extends BadRequestException {
	constructor() {
		super(
			'Введено невірний одноразовий код (TOTP). Перевірте код у вашому додатку двофакторної автентифікації та спробуйте ще раз.'
		)
	}
}
