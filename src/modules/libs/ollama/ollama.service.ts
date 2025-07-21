import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { cleanText } from '@shared/utils'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class OllamaService {
	private readonly baseUrl: string
	private readonly model: string

	constructor(
		private readonly httpService: HttpService,
		private readonly configService: ConfigService
	) {
		this.baseUrl = `${configService.getOrThrow<string>('OLLAMA_URI')}/api/generate`

		this.model = this.configService.getOrThrow<string>('OLLAMA_MODEL')
	}

	async execute(prompt: string): Promise<string> {
		const response = await firstValueFrom(
			this.httpService.post(this.baseUrl, {
				model: this.model,
				prompt,
				stream: false
			})
		)

		return cleanText(response.data.response)
	}
}
