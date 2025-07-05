import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'

import { Permission } from '@/prisma/generated'

import { GqlAuthGuard, GqlPermissionsGuard } from '../guards'

import { PERMISSIONS_KEY } from './gql-permission.decorator'

export const GqlAuthorizedWithPermissions = (...permissions: Permission[]) =>
	applyDecorators(
		SetMetadata(PERMISSIONS_KEY, permissions),
		UseGuards(GqlAuthGuard, GqlPermissionsGuard)
	)
