import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as FormData from 'form-data'
import { firstValueFrom } from 'rxjs'

import { ProcessDmsuResponse } from './responses'

@Injectable()
export class UtilsServerService {
	private readonly baseUrl: string

	constructor(
		private readonly httpService: HttpService,
		private readonly configService: ConfigService
	) {
		this.baseUrl = `${this.configService.getOrThrow<string>('SERVER_UTILS_URI')}`
	}

	async processHstsMvsFromBuffer(
		buffer: Buffer,
		filename: string,
		mimetype = 'application/pdf'
	): Promise<ProcessDmsuResponse> {
		const form = new FormData()

		form.append('file', buffer, {
			filename,
			contentType: mimetype
		})

		const response = await firstValueFrom(
			this.httpService.post(`${this.baseUrl}/process/dmsu`, form, {
				headers: form.getHeaders()
			})
		)

		return response.data
	}
}
