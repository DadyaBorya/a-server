import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException,
	HttpStatus
} from '@nestjs/common'
import { Request, Response } from 'express'

@Catch()
export class HttpAllExceptionsFilter implements ExceptionFilter {
	catch(exception: unknown, host: ArgumentsHost): void {
		const ctx = host.switchToHttp()
		const response = ctx.getResponse<Response>()
		const request = ctx.getRequest<Request>()

		const timestamp = new Date().toISOString()
		const path = request.url

		let status = HttpStatus.INTERNAL_SERVER_ERROR
		let message = 'Невідома помилка на сервері'

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

		response.status(status).json({
			statusCode: status,
			message,
			timestamp,
			path
		})
	}
}
