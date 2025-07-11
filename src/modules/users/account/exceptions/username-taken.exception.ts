import { ConflictException } from '@nestjs/common'

export class UsernameAlreadyTakenException extends ConflictException {
	constructor() {
		super(
			"Ім'я користувача вже зайняте. Спробуйте інше ім'я або відновіть доступ до існуючого акаунта."
		)
	}
}
