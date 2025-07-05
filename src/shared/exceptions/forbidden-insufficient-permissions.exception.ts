import { ForbiddenException } from '@nestjs/common'

export class ForbiddenInsufficientPermissionsException extends ForbiddenException {
	constructor() {
		super('У вас немає достатніх прав для виконання цієї дії.')
	}
}
