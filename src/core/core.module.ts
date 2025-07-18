import { SessionModule } from '@modules/auth/session'
import { TotpModule } from '@modules/auth/totp'
import { OllamaModule } from '@modules/libs/ollama'
import { StorageModule } from '@modules/libs/storage'
import { HstsMvsProcessModule } from '@modules/process/hsts-mvs-process'
import { AccountModule } from '@modules/users/account'
import { ApolloDriver } from '@nestjs/apollo'
import { BullModule } from '@nestjs/bullmq'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { IS_DEV_ENV } from '@shared/utils'

import { getBullConfig, getGraphQLConfig } from './config'
import { PrismaModule } from './prisma'
import { RedisModule } from './redis'

@Module({
	imports: [
		ConfigModule.forRoot({ ignoreEnvFile: !IS_DEV_ENV, isGlobal: true }),
		GraphQLModule.forRootAsync({
			driver: ApolloDriver,
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getGraphQLConfig
		}),
		BullModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getBullConfig
		}),

		PrismaModule,
		RedisModule,
		AccountModule,
		SessionModule,
		TotpModule,
		StorageModule,
		HstsMvsProcessModule,
		OllamaModule
	],
	exports: [BullModule]
})
export class CoreModule {}
