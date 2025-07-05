import { InternalServerErrorException } from '@nestjs/common'

export class SessionSaveFailedException extends InternalServerErrorException {
	constructor() {
		super('Не вдалося зберегти сесію. Спробуйте пізніше.')
	}
}
