import { BadRequestException } from '@nestjs/common'
import { hash } from 'argon2'

import { PrismaClient } from '../../../prisma/generated'

const prisma = new PrismaClient()

async function main() {
	try {
		await prisma.$connect()

		const usersToCreate = [
			{
				username: 'b.ohorodnii',
				displayName: 'Огородній Борис Андрійович',
				isSuperUser: true
			},
			{
				username: 'd.antonyk',
				displayName: 'Антонюк Дмитро Олександрович',
				isSuperUser: true
			}
		]

		for (const user of usersToCreate) {
			const existedUser = await prisma.user.findUnique({
				where: { username: user.username }
			})

			if (!existedUser) {
				await prisma.user.create({
					data: {
						username: user.username,
						password: await hash(user.username),
						displayName: user.displayName,
						isSuperUser: user.isSuperUser
					}
				})
			}
		}
	} catch {
		throw new BadRequestException('Error during fill database')
	} finally {
		await prisma.$disconnect()
	}
}

main()
