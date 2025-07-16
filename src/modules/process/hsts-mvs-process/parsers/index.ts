import { CarInfoMultiParser } from './car-info-multi.parser'
import { CarInfoSingleParser } from './car-info-single.parser'
import { DriverLicenceParser } from './driver-licence.parser'

export * from './driver-licence.parser'
export * from './car-info-single.parser'
export * from './car-info-multi.parser'

export const PARSERS = [
	DriverLicenceParser,
	CarInfoSingleParser,
	CarInfoMultiParser
]
