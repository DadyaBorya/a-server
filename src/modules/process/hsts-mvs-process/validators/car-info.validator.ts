import { Injectable } from '@nestjs/common'
import { ProcessValidator } from '@shared/abstract/validators'

import { CarInfoData } from '../interfaces'

@Injectable()
export class CarInfoValidator extends ProcessValidator<CarInfoData> {
	async validate(
		data: Record<keyof CarInfoData, unknown>
	): Promise<CarInfoData> {
		return super.validate(data, CarInfoData)
	}
}
