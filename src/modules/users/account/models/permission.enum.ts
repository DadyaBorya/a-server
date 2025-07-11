import { registerEnumType } from '@nestjs/graphql'

import { Permission } from '@/prisma/generated'

registerEnumType(Permission, {
	name: 'Permission'
})

export { Permission }
