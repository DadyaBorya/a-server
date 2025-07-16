import { NotFoundException } from '@nestjs/common'

export class HstsMvsRequestNotFoundException extends NotFoundException {
	constructor() {
		super('Запит на обробку файлів ГСЦ МВС не знайдено')
	}
}
