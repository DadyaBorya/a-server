import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'

import { Permission } from '@/prisma/generated'

import { GqlPermissionsGuard } from '../guards'

export const PERMISSIONS_KEY = 'permissions'

export const Permissions = (...permissions: Permission[]) =>
	applyDecorators(
		SetMetadata(PERMISSIONS_KEY, permissions),
		UseGuards(GqlPermissionsGuard)
	)
