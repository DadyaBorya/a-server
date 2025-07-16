import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class OllamaService {
	constructor(private readonly httpService: HttpService) {}

	async execute(prompt: string): Promise<string> {
		const response = await firstValueFrom(
			this.httpService.post('http://localhost:11434/api/generate', {
				model: 'gemma3:12b',
				prompt,
				stream: false
			})
		)

		return response.data.response
	}
}
