import { CellMapping } from '@shared/types'
import { parseDate } from '@shared/utils'

export class DataTransformer {
	_transform<T extends Record<string, any>>(
		data: Record<keyof T, unknown>,
		cells: CellMapping<T>[]
	): Record<keyof T, unknown> {
		for (const cell of cells) {
			if (cell.type === 'date' && cell.fieldName in data) {
				data[cell.fieldName] = parseDate(data[cell.fieldName])
			}
		}

		return data
	}

	_transformMany<T extends Record<string, any>>(
		data: Record<keyof T, unknown>[],
		cells: CellMapping<T>[]
	): Record<keyof T, unknown>[] {
		return data.map(item => this._transform<T>(item, cells))
	}
}
