import { SessionModule } from '@modules/auth/session'
import { TotpModule } from '@modules/auth/totp'
import { StorageModule } from '@modules/libs/storage'
import { HstsMvsProcessModule } from '@modules/process/hsts-mvs-process'
import { AccountModule } from '@modules/users/account'
import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { IS_DEV_ENV } from '@shared/utils'

import { getGraphQLConfig } from './config'
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
		PrismaModule,
		RedisModule,
		AccountModule,
		SessionModule,
		TotpModule,
		StorageModule,
		HstsMvsProcessModule
	]
})
export class CoreModule {}
