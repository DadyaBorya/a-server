import { UnauthorizedException } from '@nestjs/common'

export class AuthNotAuthenticatedException extends UnauthorizedException {
	constructor() {
		super('Користувач неавторизований. Будь ласка, увійдіть у систему.')
	}
}
