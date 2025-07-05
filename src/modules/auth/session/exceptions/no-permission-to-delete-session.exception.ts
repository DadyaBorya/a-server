import { ConflictException } from '@nestjs/common'

export class NoPermissionToDeleteSessionException extends ConflictException {
	constructor() {
		super('У вас немає прав для видалення цієї сесії.')
	}
}
