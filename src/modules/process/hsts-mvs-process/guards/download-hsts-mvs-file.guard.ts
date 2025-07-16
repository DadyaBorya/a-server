import { PrismaService } from '@core/prisma'
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { ForbiddenInsufficientPermissionsException } from '@shared/exceptions'

import { Permission } from '@/prisma/generated'

@Injectable()
export class DownloadHstsMvsProcessGuard implements CanActivate {
	constructor(private readonly prisma: PrismaService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest()

		const user = request.user

		if (
			user.isSuperUser ||
			user.permissions.includes(Permission.PROCESS_READ_ALL)
		) {
			return true
		}

		const fileId = request.params.id

		const file = await this.prisma.storageFile.findFirst({
			where: {
				id: fileId,
				OR: [
					{
						driverLicenseProcesses: {
							some: {
								process: {
									userId: user.id
								}
							}
						}
					},
					{
						carInfoProcesses: {
							some: {
								process: {
									userId: user.id
								}
							}
						}
					},
					{
						resultProcesses: {
							some: {
								process: {
									userId: user.id
								}
							}
						}
					}
				]
			}
		})

		if (!file) {
			throw new ForbiddenInsufficientPermissionsException()
		}

		if (!user.permissions.includes(Permission.PROCESS_READ_OWN)) {
			throw new ForbiddenInsufficientPermissionsException()
		}

		return true
	}
}
