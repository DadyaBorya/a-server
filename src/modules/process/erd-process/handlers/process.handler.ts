import { StorageService } from '@modules/libs/storage'
import { Injectable } from '@nestjs/common'

import { ErdErrorHandler } from './error.handler'
import { ErdFinalizerHandler } from './finalizer.handler'
import { ErdInitializerHandler } from './initializer.handler'

@Injectable()
export class ErdProcessHandler {
	constructor(
		private readonly storage: StorageService,
		private readonly initializer: ErdInitializerHandler,
		private readonly errorHandler: ErdErrorHandler,
		private readonly finalizer: ErdFinalizerHandler
	) {}

	async process(processId: string): Promise<void> {
		try {
			const process = await this.initializer.initialize(processId)

			console.log(process)

			await this.finalizer.finalize(processId)
		} catch (error) {
			await this.errorHandler.handleError(processId, error)
		}
	}
}
