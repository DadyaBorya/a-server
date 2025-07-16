import { ConfigService } from '@nestjs/config'
import { QueueOptions } from 'bullmq'

export function getBullConfig(configService: ConfigService): QueueOptions {
	return {
		connection: {
			host: configService.getOrThrow<string>('REDIS_HOST'),
			port: configService.getOrThrow<number>('REDIS_PORT'),
			password: configService.getOrThrow<string>('REDIS_PASSWORD')
		},
		defaultJobOptions: {
			removeOnFail: true,
			removeOnComplete: true
		}
	}
}
