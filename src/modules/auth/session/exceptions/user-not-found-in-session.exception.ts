import { NotFoundException } from '@nestjs/common'

export class UserNotFoundInSessionException extends NotFoundException {
	constructor() {
		super('Не вдалося визначити користувача поточної сесії.')
	}
}
