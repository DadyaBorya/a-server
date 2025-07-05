import { Field, ID, ObjectType } from '@nestjs/graphql'

import { DeviceInfo, LocationInfo, SessionMetadata } from '@/src/shared/types'

@ObjectType()
export class LocationModel implements LocationInfo {
	@Field(() => String)
	country: string

	@Field(() => String)
	city: string

	@Field(() => Number)
	latidute: number

	@Field(() => Number)
	longitude: number
}

@ObjectType()
export class DeviceModel implements DeviceInfo {
	@Field(() => String, { nullable: true })
	browser: string

	@Field(() => String, { nullable: true })
	os: string

	@Field(() => String, { nullable: true })
	type: string
}

@ObjectType()
export class SessionMetadaModel implements SessionMetadata {
	@Field(() => LocationModel)
	location: LocationModel

	@Field(() => DeviceModel)
	device: DeviceModel

	@Field(() => String)
	ip: string
}

@ObjectType()
export class SessionModel {
	@Field(() => ID)
	id: string

	@Field(() => String)
	userId: string

	@Field(() => String)
	createdAt: string

	@Field(() => SessionMetadaModel)
	metadata: SessionMetadaModel
}
