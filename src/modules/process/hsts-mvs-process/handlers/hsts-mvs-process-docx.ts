import { StorageService } from '@modules/libs/storage'
import { Injectable } from '@nestjs/common'

import { HstsMvsStage } from '@/prisma/generated'

import { HstsMvsDocxGenerator } from '../docx'
import { HstsMvsProcessService } from '../hsts-mvs-process.service'
import { HstsMvsDocxData } from '../interfaces'

@Injectable()
export class HstsMvsProcessDocx {
	private readonly bucket = 'templates'
	private readonly path = 'hsts_mvs/template.docx'

	constructor(
		private readonly storage: StorageService,
		private readonly hstsMvsService: HstsMvsProcessService,
		private readonly docxGenerator: HstsMvsDocxGenerator
	) {}

	async process(
		processId: string,
		modifiedData: HstsMvsDocxData,
		outputFilename: string
	) {
		await this.hstsMvsService.update(processId, {
			stage: HstsMvsStage.GENERATE_RESULT_DATA
		})

		const templateBuffer = await this.storage.findPlainFileByPath(
			this.bucket,
			this.path
		)

		const buffer = this.docxGenerator.generate(templateBuffer, modifiedData)

		const file = await this.storage.createFromBuffer(
			buffer,
			'/process/hsts-mvs',
			outputFilename
		)

		await this.hstsMvsService.update(processId, {
			resultFileId: file.id
		})
	}
}
