import { ErdErrorHandler } from './error.handler'
import { ErdFinalizerHandler } from './finalizer.handler'
import { ErdInitializerHandler } from './initializer.handler'
import { ErdProcessHandler } from './process.handler'

export * from './error.handler'
export * from './finalizer.handler'
export * from './initializer.handler'
export * from './process.handler'

export const HANDLERS = [
	ErdInitializerHandler,
	ErdProcessHandler,
	ErdErrorHandler,
	ErdFinalizerHandler
]
