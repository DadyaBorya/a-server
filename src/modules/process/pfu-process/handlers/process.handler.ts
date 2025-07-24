import { ProcessCoreService } from '@modules/process/process-core'
import { createOutputFilename } from '@modules/process/utils'
import { Injectable } from '@nestjs/common'
import { capitalizeFullName } from '@shared/utils'

import { PfuInputTransformHandler } from '../transform'

import { PfuDocxHandler } from './docx.handler'
import { PfuErrorHandler } from './error.handler'
import { PfuFinalizerHandler } from './finalizer.handler'
import { PfuInitializerHandler } from './initializer.handler'
import { PfuInputProcessorHandler } from './input-processor.handler'
import { PfuModifierHandler } from './modifier.handler'

@Injectable()
export class PfuProcessHandler {
	constructor(
		private readonly processService: ProcessCoreService,
		private readonly initializer: PfuInitializerHandler,
		private readonly finalizer: PfuFinalizerHandler,
		private readonly inputProcessor: PfuInputProcessorHandler,
		private readonly inputTransform: PfuInputTransformHandler,
		private readonly modifier: PfuModifierHandler,
		private readonly errorHandler: PfuErrorHandler,
		private readonly docxProcess: PfuDocxHandler
	) {}

	async process(processId: string): Promise<void> {
		try {
			const process = await this.initializer.initialize(processId)

			const inputData = await this.inputProcessor.process(
				processId,
				process.inputFileId
			)

			const capitalizedFullname = capitalizeFullName(
				inputData.lastName,
				inputData.firstName,
				inputData.patronymic
			)

			await this.processService.update(processId, {
				owner: capitalizedFullname
			})

			const transformedInput = await this.inputTransform.transform(
				processId,
				inputData
			)

			const modifiedData = await this.modifier.modify(
				processId,
				transformedInput,
				process.isAi
			)

			const resultFilename = createOutputFilename(
				process.process.createdAt,
				capitalizedFullname,
				'ПФУ',
				'docx'
			)

			await this.docxProcess.process(
				processId,
				modifiedData,
				resultFilename
			)

			await this.finalizer.finalize(processId)
		} catch (error) {
			await this.errorHandler.handleError(processId, error)
		}
	}
}
