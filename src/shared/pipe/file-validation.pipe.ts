import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { ReadStream } from 'fs'

import { validateFileFormat, validateFileSize } from '../utils'

@Injectable()
export class FileValidationPipe implements PipeTransform {
	async transform(value: any) {
		if (!value.filename) {
			throw new BadRequestException('File did not uploaded')
		}

		const { filename, createReadStream } = value

		const fileStream = createReadStream() as ReadStream

		const allowedFormats = ['xls']
		const isFileFormatValid = validateFileFormat(filename, allowedFormats)

		if (!isFileFormatValid) {
			throw new BadRequestException()
		}

		const isFileSizeValid = await validateFileSize(
			fileStream,
			10 * 1024 * 1024
		)

		if (!isFileSizeValid) {
			throw new BadRequestException()
		}

		return value
	}
}
