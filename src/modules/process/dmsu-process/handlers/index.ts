import { DmsuErrorHandler } from './dmsu-error-handler'
import { DmsuExtractImageAndRemoveWatermarkProcess } from './dmsu-extract-image-and-remove-watermark-processor'
import { DmsuPersonInfoProcessor } from './dmsu-person-info-processor'
import { DmsuProcessDocx } from './dmsu-process-docx'
import { DmsuProcessFinalizer } from './dmsu-process-finalizer'
import { DmsuProcessInitializer } from './dmsu-process-initializer'
import { DmsuProcessModifier } from './dmsu-process-modifier'
import { DmsuProcessHandler } from './dmsu-process.handler'

export * from './dmsu-process.handler'
export * from './dmsu-process-initializer'
export * from './dmsu-error-handler'
export * from './dmsu-process-finalizer'
export * from './dmsu-extract-image-and-remove-watermark-processor'
export * from './dmsu-person-info-processor'
export * from './dmsu-process-modifier'
export * from './dmsu-process-docx'

export const HANDLERS = [
	DmsuProcessHandler,
	DmsuProcessInitializer,
	DmsuErrorHandler,
	DmsuProcessFinalizer,
	DmsuExtractImageAndRemoveWatermarkProcess,
	DmsuPersonInfoProcessor,
	DmsuProcessModifier,
	DmsuProcessDocx
]
