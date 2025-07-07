import { BadRequestException } from '@nestjs/common'
import { hash } from 'argon2'

import { PrismaClient } from '../../../prisma/generated'

const prisma = new PrismaClient()

async function main() {
	try {
		await prisma.$connect()

		const existedUser = await prisma.user.findUnique({
			where: { username: 'b.ohorodnii' }
		})

		if (!existedUser) {
			await prisma.user.create({
				data: {
					username: 'b.ohorodnii',
					password: await hash('b.ohorodnii'),
					displayName: 'Огородній Борис Андрійович',
					isSuperUser: true
				}
			})
		}
	} catch {
		throw new BadRequestException('Error during fill database')
	} finally {
		await prisma.$disconnect()
	}
}

main()
