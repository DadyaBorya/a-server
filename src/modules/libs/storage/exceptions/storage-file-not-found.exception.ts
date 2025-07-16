import { NotFoundException } from '@nestjs/common'

export class StorageFileNotFoundException extends NotFoundException {
	constructor() {
		super('Файл не знайдено')
	}
}
