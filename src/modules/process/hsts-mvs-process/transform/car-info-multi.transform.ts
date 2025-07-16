import { Injectable } from '@nestjs/common'
import { DataTransformer } from '@shared/abstract/transform'
import { CellMapping } from '@shared/types'

import { CarInfoData } from '../interfaces'

@Injectable()
export class CarInfoMultiTransform extends DataTransformer {
	transforMany(
		data: Record<keyof CarInfoData, unknown>[],
		cells: CellMapping<CarInfoData>[]
	) {
		return super._transformMany(data, cells)
	}
}
