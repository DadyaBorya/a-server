import { HstsMvsCarInfoProcessorHandler } from './car-info-processor.handler'
import { HstsMvsDocxHandler } from './docx.handler'
import { HstsMvsDriverLicenceProcessorHandler } from './driver-licence-processor.handler'
import { HstsMvsErrorHandler } from './error.handler'
import { HstsMvsFinalizerHandler } from './finalizer.handler'
import { HstsMvsInitializerHandler } from './initializer.handler'
import { HstsMvsModifierHandler } from './modifier.handler'
import { HstsMvsProcessHandler } from './process.handler'

export * from './car-info-processor.handler'
export * from './driver-licence-processor.handler'
export * from './error.handler'
export * from './finalizer.handler'
export * from './initializer.handler'
export * from './process.handler'
export * from './modifier.handler'
export * from './docx.handler'

export const HANDLERS = [
	HstsMvsInitializerHandler,
	HstsMvsDriverLicenceProcessorHandler,
	HstsMvsCarInfoProcessorHandler,
	HstsMvsFinalizerHandler,
	HstsMvsErrorHandler,
	HstsMvsProcessHandler,
	HstsMvsModifierHandler,
	HstsMvsDocxHandler
]
