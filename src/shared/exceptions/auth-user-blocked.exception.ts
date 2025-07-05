import { ForbiddenException } from '@nestjs/common'

export class AuthUserBlockedException extends ForbiddenException {
	constructor() {
		super({
			statusCode: 403,
			message:
				'Ваш обліковий запис заблоковано. Зверніться до адміністратора.'
		})
	}
}
