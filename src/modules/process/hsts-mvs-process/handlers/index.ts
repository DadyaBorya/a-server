import { HstsMvsCarInfoProcessor } from './hsts-mvs-car-info-processor'
import { HstsMvsDriverLicenceProcessor } from './hsts-mvs-driver-licence-processor'
import { HstsMvsErrorHandler } from './hsts-mvs-error-handler'
import { HstsMvsProcessDocx } from './hsts-mvs-process-docx'
import { HstsMvsProcessFinalizer } from './hsts-mvs-process-finalizer'
import { HstsMvsProcessInitializer } from './hsts-mvs-process-initializer'
import { HstsMvsProcessModifier } from './hsts-mvs-process-modifier'
import { HstsMvsProcessHandler } from './hsts-mvs-process.handler'

export * from './hsts-mvs-car-info-processor'
export * from './hsts-mvs-driver-licence-processor'
export * from './hsts-mvs-error-handler'
export * from './hsts-mvs-process-finalizer'
export * from './hsts-mvs-process-initializer'
export * from './hsts-mvs-process.handler'
export * from './hsts-mvs-process-modifier'
export * from './hsts-mvs-process-docx'

export const HANDLERS = [
	HstsMvsProcessInitializer,
	HstsMvsDriverLicenceProcessor,
	HstsMvsCarInfoProcessor,
	HstsMvsProcessFinalizer,
	HstsMvsErrorHandler,
	HstsMvsProcessHandler,
	HstsMvsProcessModifier,
	HstsMvsProcessDocx
]
