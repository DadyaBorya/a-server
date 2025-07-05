import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException,
	HttpStatus
} from '@nestjs/common'
import { GqlArgumentsHost } from '@nestjs/graphql'
import { GraphQLError } from 'graphql'

@Catch()
export class GqlAllExceptionsFilter implements ExceptionFilter {
	catch(exception: unknown, host: ArgumentsHost): never {
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
	}
}
