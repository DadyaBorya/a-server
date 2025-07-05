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

		if (exception instanceof HttpException) {
			status = exception.getStatus()
			const res = exception.getResponse()
			message =
				typeof res === 'string'
					? res
					: (res as any)?.message || exception.message
		} else if (exception instanceof Error) {
			message = exception.message
		}

		throw new GraphQLError(message, {
			extensions: {
				code: 'GRAPHQL_ERROR',
				statusCode: status,
				timestamp,
				path
			}
		})
	}
}
