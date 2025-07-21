import { Permission, User } from '@/prisma/generated'

export function assertPermission(
	user: User,
	requiredPermissions: Permission[],
	PermissionError: new () => Error,
	func: () => boolean
) {
	const isSuperUser = user.isSuperUser

	const hasPermission = requiredPermissions.every(permission =>
		user.permissions.includes(permission)
	)

	const other = func()

	if (!other && !isSuperUser && !hasPermission) {
		throw new PermissionError()
	}

	return true
}
