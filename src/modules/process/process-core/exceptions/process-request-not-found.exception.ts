import { NotFoundException } from '@nestjs/common'

export class ProcessRequestNotFoundException extends NotFoundException {
	constructor() {
		super('Запит на обробку файлів не знайдено')
	}
}
