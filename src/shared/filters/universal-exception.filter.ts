import {
	ArgumentsHost,
	Catch,
	ContextType,
	ExceptionFilter,
	HttpException,
	HttpStatus
} from '@nestjs/common'
import { GqlArgumentsHost } from '@nestjs/graphql'
import { Request, Response } from 'express'
import { GraphQLError } from 'graphql'

@Catch()
export class UniversalExceptionFilter implements ExceptionFilter {
	catch(exception: unknown, host: ArgumentsHost): void | never {
		const ctxType = host.getType()

		if (ctxType === ('graphql' as ContextType)) {
			// GraphQL обробка
			const gqlHost = GqlArgumentsHost.create(host)
			const timestamp = new Date().toISOString()
			const path = gqlHost.getInfo().fieldName

			let status = HttpStatus.INTERNAL_SERVER_ERROR
			let message = 'Невідома помилка GraphQL'
			let errorCode = 'GRAPHQL_ERROR'

			if (exception instanceof HttpException) {
				status = exception.getStatus()
				const res = exception.getResponse()

				if (typeof res === 'string') {
					message = res
				} else if (typeof res === 'object' && res !== null) {
					const response = res as Record<string, any>
					message = response.message || exception.message
					errorCode = response.errorCode || errorCode
				} else {
					message = exception.message
				}
			} else if (exception instanceof Error) {
				message = exception.message
			}

			throw new GraphQLError(message, {
				extensions: {
					code: errorCode,
					statusCode: status,
					timestamp,
					path
				}
			})
		} else if (ctxType === ('http' as ContextType)) {
			const ctx = host.switchToHttp()
			const response = ctx.getResponse<Response>()
			const request = ctx.getRequest<Request>()

			const timestamp = new Date().toISOString()
			const path = request.url

			let status = HttpStatus.INTERNAL_SERVER_ERROR
			let message = 'Невідома помилка HTTP'
			let errorCode = 'HTTP_ERROR'

			if (exception instanceof HttpException) {
				status = exception.getStatus()
				const res = exception.getResponse()

				if (typeof res === 'string') {
					message = res
				} else if (typeof res === 'object' && res !== null) {
					const response = res as Record<string, any>
					message = response.message || exception.message
					errorCode = response.errorCode || errorCode
				} else {
					message = exception.message
				}
			} else if (exception instanceof Error) {
				message = exception.message
			}

			response.status(status).json({
				statusCode: status,
				message,
				errorCode,
				timestamp,
				path
			})
		}
	}
}
