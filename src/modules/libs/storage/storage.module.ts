import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { isDev } from '@shared/utils'
import { NestMinioModule } from 'nestjs-minio'

import { StorageRepository } from './storage.repository'
import { StorageService } from './storage.service'

@Module({
	imports: [
		ConfigModule,
		NestMinioModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				endPoint: configService.getOrThrow<string>('MINIO_HOST'),
				port: configService.getOrThrow<number>('MINIO_PORT'),
				useSSL: !isDev(configService),
				accessKey: configService.getOrThrow<string>('MINIO_USER'),
				secretKey: configService.getOrThrow<string>('MINIO_PASSWORD')
			})
		})
	],
	providers: [StorageService, StorageRepository],
	exports: [StorageService]
})
export class StorageModule {}
