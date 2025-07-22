import { ProcessCoreService } from '@modules/process/process-core'
import { createOutputFilename } from '@modules/process/utils'
import { Injectable } from '@nestjs/common'
import { CONTENT_TYPE } from '@shared/constants'
import { capitalizeFullName } from '@shared/utils'

import { StorageService } from '@/src/modules/libs/storage'

import { DmsuProcessService } from '../dmsu-process.service'

import { DmsuDocxHandler } from './docx.handler'
import { DmsuErrorHandler } from './error.handler'
import { DmsuFinalizerHandler } from './finalizer.handler'
import { DmsuInitializerHandler } from './initializer.handler'
import { DmsuModifierHandler } from './modifier.handler'
import { DmsuPersonInfoProcessorHandler } from './person-info-processor.handler'
import { DmsuPrimaryPersonInfoProcessorHandler } from './primary-person-info-processor.handler'

@Injectable()
export class DmsuProcessHandler {
	constructor(
		private readonly storage: StorageService,
		private readonly dmsuService: DmsuProcessService,
		private readonly processService: ProcessCoreService,
		private readonly initializer: DmsuInitializerHandler,
		private readonly errorHandler: DmsuErrorHandler,
		private readonly finalizer: DmsuFinalizerHandler,
		private readonly extractImageWaterMarkProcessor: DmsuPrimaryPersonInfoProcessorHandler,
		private readonly personInfoProcessor: DmsuPersonInfoProcessorHandler,
		private readonly modifier: DmsuModifierHandler,
		private readonly docxProcess: DmsuDocxHandler
	) {}

	async process(processId: string): Promise<void> {
		try {
			const state = await this.initializer.initialize(processId)

			const { personalInfoFileBuffer, imageBuffer } =
				await this.extractImageWaterMarkProcessor.process(
					processId,
					state.personInfoFileId
				)

			const personInfoData = await this.personInfoProcessor.process(
				processId,
				personalInfoFileBuffer
			)

			const { lastName, firstName, patronymic } = personInfoData

			const capitalizedFullname = capitalizeFullName(
				lastName,
				firstName,
				patronymic
			)

			await this.processService.update(processId, {
				owner: capitalizedFullname
			})

			const personInfoFileWWMFilename = createOutputFilename(
				state.process.createdAt,
				capitalizedFullname,
				'ДМСУ',
				'pdf',
				'WWM'
			)

			const personalInfoFileWWM = await this.storage.createFromBuffer(
				personalInfoFileBuffer,
				'/process/dmsu',
				personInfoFileWWMFilename,
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
				state.isAi
			)

			const resultFilename = createOutputFilename(
				state.process.createdAt,
				capitalizedFullname,
				'ДМСУ',
				'docx'
			)

			await this.docxProcess.process(processId, docxData, resultFilename)

			await await this.finalizer.finalize(processId)
		} catch (error) {
			await this.errorHandler.handleError(processId, error)
		}
	}
}
