import { DmsuDocxHandler } from './docx.handler'
import { DmsuErrorHandler } from './error.handler'
import { DmsuFinalizerHandler } from './finalizer.handler'
import { DmsuInitializerHandler } from './initializer.handler'
import { DmsuModifierHandler } from './modifier.handler'
import { DmsuPersonInfoProcessorHandler } from './person-info-processor.handler'
import { DmsuPrimaryPersonInfoProcessorHandler } from './primary-person-info-processor.handler'
import { DmsuProcessHandler } from './process.handler'

export * from './process.handler'
export * from './initializer.handler'
export * from './error.handler'
export * from './finalizer.handler'
export * from './primary-person-info-processor.handler'
export * from './person-info-processor.handler'
export * from './modifier.handler'
export * from './docx.handler'

export const HANDLERS = [
	DmsuProcessHandler,
	DmsuInitializerHandler,
	DmsuErrorHandler,
	DmsuFinalizerHandler,
	DmsuPrimaryPersonInfoProcessorHandler,
	DmsuPersonInfoProcessorHandler,
	DmsuModifierHandler,
	DmsuDocxHandler
]
