import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { ReadStream } from 'fs'

import { validateFileFormat, validateFileSize } from '../utils'

interface FileValidationOptions {
	allowedFormats?: string[]
	maxSize?: number // у байтах
}

@Injectable()
export class FileValidationPipe implements PipeTransform {
	private readonly allowedFormats: string[]
	private readonly maxSize: number

	constructor(options?: FileValidationOptions) {
		this.allowedFormats = options?.allowedFormats ?? []
		this.maxSize = options?.maxSize ?? 5 * 1024 * 1024
	}

	async transform(value: any) {
		if (!value?.filename || !value?.createReadStream) {
			throw new BadRequestException('Файл не було завантажено')
		}

		const { filename, createReadStream } = value
		const fileStream = createReadStream() as ReadStream

		const isFileFormatValid = validateFileFormat(
			filename,
			this.allowedFormats
		)
		if (!isFileFormatValid) {
			throw new BadRequestException(
				`Недопустимий формат файлу. Дозволені: ${this.allowedFormats.join(', ')}`
			)
		}

		const isFileSizeValid = await validateFileSize(fileStream, this.maxSize)
		if (!isFileSizeValid) {
			throw new BadRequestException(
				`Розмір файлу перевищує ліміт ${this.maxSize / (1024 * 1024)}MB`
			)
		}

		return value
	}
}
