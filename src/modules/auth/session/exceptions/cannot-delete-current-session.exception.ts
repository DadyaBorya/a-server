import { ConflictException } from '@nestjs/common'

export class CannotDeleteCurrentSessionException extends ConflictException {
	constructor() {
		super('Неможливо видалити поточну активну сесію.')
	}
}
