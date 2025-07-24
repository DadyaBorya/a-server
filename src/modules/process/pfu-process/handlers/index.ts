import { PfuDocxHandler } from './docx.handler'
import { PfuErrorHandler } from './error.handler'
import { PfuFinalizerHandler } from './finalizer.handler'
import { PfuInitializerHandler } from './initializer.handler'
import { PfuInputProcessorHandler } from './input-processor.handler'
import { PfuModifierHandler } from './modifier.handler'
import { PfuProcessHandler } from './process.handler'

export * from './process.handler'
export * from './initializer.handler'
export * from './finalizer.handler'
export * from './error.handler'
export * from './input-processor.handler'
export * from './modifier.handler'
export * from './docx.handler'

export const HANDLERS = [
	PfuProcessHandler,
	PfuInitializerHandler,
	PfuFinalizerHandler,
	PfuErrorHandler,
	PfuInputProcessorHandler,
	PfuModifierHandler,
	PfuDocxHandler
]
