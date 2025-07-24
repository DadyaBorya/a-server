import { StorageService } from '@modules/libs/storage'
import { Injectable } from '@nestjs/common'
import { CONTENT_TYPE } from '@shared/constants'

import { PfuStage } from '@/prisma/generated'

import { PfuDocxGenerator } from '../docx'
import { PfuDocxData } from '../interfaces'
import { PfuProcessService } from '../pfu-process.service'

@Injectable()
export class PfuDocxHandler {
	private readonly bucket = 'templates'
	private readonly path = 'pfu/template.docx'

	constructor(
		private readonly storage: StorageService,
		private readonly pfuService: PfuProcessService,
		private readonly docxGenerator: PfuDocxGenerator
	) {}

	async process(
		processId: string,
		modifiedData: PfuDocxData,
		outputFilename: string
	) {
		await this.pfuService.update(processId, {
			stage: PfuStage.GENERATE_RESULT_DATA
		})

		const templateBuffer = await this.storage.findPlainFileByPath(
			this.bucket,
			this.path
		)

		const buffer = this.docxGenerator.generate(templateBuffer, modifiedData)

		const file = await this.storage.createFromBuffer(
			buffer,
			'/process/pfu',
			outputFilename,
			CONTENT_TYPE.DOCX,
			'docx'
		)

		await this.pfuService.update(processId, {
			resultFileId: file.id
		})
	}
}
