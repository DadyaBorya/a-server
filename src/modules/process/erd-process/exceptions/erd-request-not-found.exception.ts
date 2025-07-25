import { NotFoundException } from '@nestjs/common'

export class ErdRequestNotFoundException extends NotFoundException {
	constructor() {
		super('Запит на обробку файлів ЄРД не знайдено')
	}
}
