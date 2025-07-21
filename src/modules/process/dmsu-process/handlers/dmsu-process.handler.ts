import { ProcessCoreService } from '@modules/process/process-core'
import { createOutputFilename } from '@modules/process/utils'
import { Injectable } from '@nestjs/common'
import { CONTENT_TYPE } from '@shared/constants'
import { capitalizeFullName } from '@shared/utils'

import { StorageService } from '@/src/modules/libs/storage'

import { DmsuProcessService } from '../dmsu-process.service'

import { DmsuErrorHandler } from './dmsu-error-handler'
import { DmsuExtractImageAndRemoveWatermarkProcess } from './dmsu-extract-image-and-remove-watermark-processor'
import { DmsuPersonInfoProcessor } from './dmsu-person-info-processor'
import { DmsuProcessDocx } from './dmsu-process-docx'
import { DmsuProcessFinalizer } from './dmsu-process-finalizer'
import { DmsuProcessInitializer } from './dmsu-process-initializer'
import { DmsuProcessModifier } from './dmsu-process-modifier'

@Injectable()
export class DmsuProcessHandler {
	constructor(
		private readonly storage: StorageService,
		private readonly dmsuService: DmsuProcessService,
		private readonly processService: ProcessCoreService,
		private readonly initializer: DmsuProcessInitializer,
		private readonly errorHandler: DmsuErrorHandler,
		private readonly finalizer: DmsuProcessFinalizer,
		private readonly extractImageWaterMarkProcessor: DmsuExtractImageAndRemoveWatermarkProcess,
		private readonly personInfoProcessor: DmsuPersonInfoProcessor,
		private readonly modifier: DmsuProcessModifier,
		private readonly docxProcess: DmsuProcessDocx
	) {}

	async process(processId: string): Promise<void> {
		try {
			const { personInfoFileId, process, isAi } =
				await this.initializer.initialize(processId)

			const { personalInfoFileBuffer, imageBuffer } =
				await this.extractImageWaterMarkProcessor.process(
					processId,
					personInfoFileId
				)

			const personInfoData = await this.personInfoProcessor.process(
				processId,
				personalInfoFileBuffer
			)

			const { lastName, firstName, patronymic } = personInfoData

			await this.processService.update(processId, {
				owner: capitalizeFullName(lastName, firstName, patronymic)
			})

			const personalInfoFileWWM = await this.storage.createFromBuffer(
				personalInfoFileBuffer,
				'/process/dmsu',
				createOutputFilename(
					process.createdAt,
					capitalizeFullName(lastName, firstName, patronymic),
					'ДМСУ',
					'pdf',
					'WWM'
				),
				CONTENT_TYPE.PDF,
				'pdf'
			)

			await this.dmsuService.update(processId, {
				withoutWMFileId: personalInfoFileWWM.id
			})

			const docxData = await this.modifier.modify(
				processId,
				personInfoData,
				imageBuffer,
				isAi
			)

			await this.docxProcess.process(
				processId,
				docxData,
				createOutputFilename(
					process.createdAt,
					capitalizeFullName(lastName, firstName, patronymic),
					'ДМСУ',
					'docx'
				)
			)

			await await this.finalizer.finalize(processId)
		} catch (error) {
			await this.errorHandler.handleError(processId, error)
		}
	}
}
