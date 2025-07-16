import { CarInfoMultiTransform } from './car-info-multi.transform'
import { CarInfoSingleTransform } from './car-info-single.transform'
import { DriverLicenceTransform } from './driver-licence.transform'

export * from './driver-licence.transform'
export * from './car-info-multi.transform'
export * from './car-info-single.transform'

export const TRANSFORMS = [
	DriverLicenceTransform,
	CarInfoSingleTransform,
	CarInfoMultiTransform
]
