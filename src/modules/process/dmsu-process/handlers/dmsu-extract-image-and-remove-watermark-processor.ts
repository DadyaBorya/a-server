import { StorageService } from '@modules/libs/storage'
import { UtilsServerService } from '@modules/libs/utils-server'
import { Injectable } from '@nestjs/common'

import { DmsuProcessService } from '../dmsu-process.service'

@Injectable()
export class DmsuExtractImageAndRemoveWatermarkProcess {
	constructor(
		private readonly dmsuService: DmsuProcessService,
		private readonly storage: StorageService,
		private readonly utilsServerService: UtilsServerService
	) {}

	async process(processId: string, personInfoFileId: string) {
		const personInfoBuffer =
			await this.storage.findBufferById(personInfoFileId)

		const response = await this.utilsServerService.processHstsMvsFromBuffer(
			personInfoBuffer.buffer,
			personInfoBuffer.filename,
			personInfoBuffer.mimetype
		)

		const personalInfoFileBuffer = Buffer.from(response.pdf, 'base64')
		const imageBuffer = Buffer.from(response.image, 'base64')

		return { personalInfoFileBuffer, imageBuffer }
	}
}
