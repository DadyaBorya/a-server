import { ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigService } from '@nestjs/config'
import { isDev } from '@shared/utils'
import { join } from 'path'

export function getGraphQLConfig(
	configService: ConfigService
): ApolloDriverConfig {
	return {
		playground: isDev(configService),
		path: configService.getOrThrow<string>('GRAPHQL_PREFIX'),
		autoSchemaFile: join(
			process.cwd(),
			'src',
			'core',
			'graphql',
			'schema.gql'
		),
		sortSchema: true,
		context: ({ req, res }) => ({ request: req, response: res })
	}
}
