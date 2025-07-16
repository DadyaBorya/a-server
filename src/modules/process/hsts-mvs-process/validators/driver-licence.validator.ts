import { Injectable } from '@nestjs/common'
import { ProcessValidator } from '@shared/abstract/validators'

import { DriverLicenceData } from '../interfaces'

@Injectable()
export class DriverLicenceValidator extends ProcessValidator<DriverLicenceData> {
	async validate(
		data: Record<keyof DriverLicenceData, unknown>
	): Promise<DriverLicenceData> {
		return super.validate(data, DriverLicenceData)
	}
}
