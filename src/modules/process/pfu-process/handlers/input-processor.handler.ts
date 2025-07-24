import { StorageService } from '@modules/libs/storage'
import { Injectable } from '@nestjs/common'

import { PfuStage } from '@/prisma/generated'

import { PfuInput } from '../interfaces'
import { PfuInputFileParser } from '../parsers'
import { PfuProcessService } from '../pfu-process.service'
import { PfuInputValidator } from '../validators'

@Injectable()
export class PfuInputProcessorHandler {
	constructor(
		private readonly storage: StorageService,
		private readonly pfuService: PfuProcessService,
		private readonly parser: PfuInputFileParser,
		private readonly validator: PfuInputValidator
	) {}

	async process(processId: string, inputFileId: string) {
		const inputBuffer = await this.storage.findBufferById(inputFileId)

		const rawXml = this.parser.extract(inputBuffer.buffer.toString('utf-8'))

		const parsedInput = this.parser.parse(rawXml)

		await this.pfuService.update(processId, {
			stage: PfuStage.VALIDATE_INPUT_FILE
		})

		await this.validator.validateObject(parsedInput, PfuInput)

		return parsedInput

		// await this.personInfoValidator.validateObject(
		// 	personInfoData,
		// 	PersonInfoData
		// )

		// return personInfoData
	}
}
