import { Injectable } from '@nestjs/common'
import { DataTransformer } from '@shared/abstract/transform'
import { CellMapping } from '@shared/types'

import { DriverLicenceData } from '../interfaces'

@Injectable()
export class DriverLicenceTransform extends DataTransformer {
	transform(
		data: Record<keyof DriverLicenceData, unknown>[],
		cells: CellMapping<DriverLicenceData>[]
	) {
		const result = data.find(i => i.status === 'ВИДАНИЙ')

		if (!result) return {} as Record<keyof DriverLicenceData, unknown>

		return this._transform(result, cells)
	}
}
