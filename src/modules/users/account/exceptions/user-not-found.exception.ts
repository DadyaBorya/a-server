import { NotFoundException } from '@nestjs/common'

export class UserNotFoundException extends NotFoundException {
	constructor() {
		super(
			'Користувача не знайдено. Можливо, він був видалений або ніколи не існував.'
		)
	}
}
