import { CarInfoValidator } from './car-info.validator'
import { DriverLicenceValidator } from './driver-licence.validator'

export * from './driver-licence.validator'
export * from './car-info.validator'

export const VALIDATORS = [DriverLicenceValidator, CarInfoValidator]
