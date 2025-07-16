import { BadRequestException } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'

export abstract class ProcessValidator<T extends object> {
	async validate(
		data: Record<string, unknown>,
		dtoClass: new () => T
	): Promise<T> {
		const instance = plainToInstance(dtoClass, data)
		const errors = await validate(instance)

		if (errors.length > 0) {
			const messages = errors.flatMap(error =>
				Object.values(error.constraints || {})
			)

			const allFields = Object.keys(instance)
			const invalidFields = errors.map(e => e.property)

			const allFieldsInvalid = allFields.every(field =>
				invalidFields.includes(field)
			)

			if (allFieldsInvalid) {
				throw new BadRequestException('Файл невалідний')
			}

			throw new BadRequestException(
				`Помилка валідації:\n${messages.join('\n')}`
			)
		}

		return instance
	}

	async validateMany(
		dataArray: Record<string, unknown>[],
		dtoClass: new () => T
	): Promise<T[]> {
		const allErrors: string[] = []
		const list = []

		for (const [index, data] of dataArray.entries()) {
			const instance = plainToInstance(dtoClass, data)
			const errors = await validate(instance)

			if (errors.length > 0) {
				const messages = errors.flatMap(error =>
					Object.values(error.constraints || {})
				)

				const allFields = Object.keys(instance)
				const invalidFields = errors.map(e => e.property)
				const allFieldsInvalid = allFields.every(field =>
					invalidFields.includes(field)
				)

				if (allFieldsInvalid) {
					allErrors.push(`Запис ${index + 1}: Файл невалідний`)
				} else {
					allErrors.push(
						`Запис ${index + 1}:\n` + messages.join('\n')
					)
				}
			} else {
				list.push(instance)
			}
		}

		if (allErrors.length > 0) {
			throw new BadRequestException(
				`Помилка валідації:\n${allErrors.join('\n\n')}`
			)
		}

		return list
	}
}
