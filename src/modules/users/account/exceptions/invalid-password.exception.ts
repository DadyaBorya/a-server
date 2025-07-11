import { NotFoundException } from '@nestjs/common'

export class InvalidPasswordException extends NotFoundException {
	constructor() {
		super('Поточний пароль вказано невірно.')
	}
}
