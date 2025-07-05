import { BadRequestException } from '@nestjs/common'

export class TotpAlreadyEnabledException extends BadRequestException {
	constructor() {
		super(
			'Двофакторна автентифікація вже увімкнена. Ви не можете згенерувати новий секрет, поки не вимкнете поточну.'
		)
	}
}
