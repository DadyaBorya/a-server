import { NotFoundException } from '@nestjs/common'

export class PfuRequestNotFoundException extends NotFoundException {
	constructor() {
		super('Запит на обробку файлів ПФУ не знайдено')
	}
}
