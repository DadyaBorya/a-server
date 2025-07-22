import { Injectable } from '@nestjs/common'

import { DmsuStage } from '@/prisma/generated'

import { DmsuProcessService } from '../dmsu-process.service'
import { PersonInfoData } from '../interfaces'
import { PersonInfoParser } from '../parsers'
import { PersonInfoValidator } from '../validators'

@Injectable()
export class DmsuPersonInfoProcessorHandler {
	constructor(
		private readonly dmsuService: DmsuProcessService,
		private readonly personInfoParser: PersonInfoParser,
		private readonly personInfoValidator: PersonInfoValidator
	) {}

	async process(processId: string, personInfoBuffer: Buffer) {
		await this.dmsuService.update(processId, {
			stage: DmsuStage.PARSE_PERSON_INFO
		})

		const personInfoData =
			await this.personInfoParser.parse(personInfoBuffer)

		await this.dmsuService.update(processId, {
			stage: DmsuStage.VALIDATE_PERSON_INFO
		})

		await this.personInfoValidator.validateObject(
			personInfoData,
			PersonInfoData
		)

		return personInfoData
	}
}
