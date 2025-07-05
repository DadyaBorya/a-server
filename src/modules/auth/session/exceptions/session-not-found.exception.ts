import { NotFoundException } from '@nestjs/common'

export class SessionNotFoundException extends NotFoundException {
	constructor() {
		super('Сесію не знайдено або вона вже неактивна.')
	}
}
