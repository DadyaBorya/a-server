import { Injectable } from '@nestjs/common'
import { DataTransformer } from '@shared/abstract/transform'
import { CellMapping } from '@shared/types'

import { CarInfoData } from '../interfaces'

@Injectable()
export class CarInfoSingleTransform extends DataTransformer {
	transform(
		data: Record<keyof CarInfoData, unknown>,
		cells: CellMapping<CarInfoData>[]
	) {
		return this._transform(data, cells)
	}
}
