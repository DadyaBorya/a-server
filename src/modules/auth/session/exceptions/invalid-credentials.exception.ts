import { UnauthorizedException } from '@nestjs/common'

export class InvalidCredentialsException extends UnauthorizedException {
	constructor() {
		super('Неправильне ім’я користувача або пароль.')
	}
}
