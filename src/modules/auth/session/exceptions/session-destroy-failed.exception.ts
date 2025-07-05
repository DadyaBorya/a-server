import { InternalServerErrorException } from '@nestjs/common'

export class SessionDestroyFailedException extends InternalServerErrorException {
	constructor() {
		super('Не вдалося завершити сесію. Спробуйте пізніше.')
	}
}
