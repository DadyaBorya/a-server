import { registerEnumType } from '@nestjs/graphql'

import { Permission } from '@/prisma/generated'

registerEnumType(Permission, {
	name: 'Permission',
	description: 'Перелік дозволів користувача'
})

export { Permission }
