import { StorageService } from '@modules/libs/storage'
import { Injectable } from '@nestjs/common'
import { CONTENT_TYPE } from '@shared/constants'

import { DmsuStage } from '@/prisma/generated'

import { DmsuProcessService } from '../dmsu-process.service'
import { DmsuDocxGenerator } from '../docx'
import { DmsuDocxData } from '../interfaces'

@Injectable()
export class DmsuDocxHandler {
	private readonly bucket = 'templates'
	private readonly path = 'dmsu/template.docx'

	constructor(
		private readonly storage: StorageService,
		private readonly dmsuService: DmsuProcessService,
		private readonly docxGenerator: DmsuDocxGenerator
	) {}

	async process(
		processId: string,
		modifiedData: DmsuDocxData,
		outputFilename: string
	) {
		await this.dmsuService.update(processId, {
			stage: DmsuStage.GENERATE_RESULT_DATA
		})

		const templateBuffer = await this.storage.findPlainFileByPath(
			this.bucket,
			this.path
		)

		const buffer = this.docxGenerator.generate(templateBuffer, modifiedData)

		const file = await this.storage.createFromBuffer(
			buffer,
			'/process/dmsu',
			outputFilename,
			CONTENT_TYPE.DOCX,
			'docx'
		)

		await this.dmsuService.update(processId, {
			resultFileId: file.id
		})
	}
}
