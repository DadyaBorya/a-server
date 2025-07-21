import { NotFoundException } from '@nestjs/common'

export class DmsuRequestNotFoundException extends NotFoundException {
	constructor() {
		super('Запит на обробку файлів ДМСУ не знайдено')
	}
}
