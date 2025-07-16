import { CellMapping } from '@shared/types'

import { CarInfoData } from '../interfaces'

export const CAR_SINGLE_INFO_CELLS: CellMapping<CarInfoData>[] = [
	{
		row: 2,
		col: 3,
		fieldName: 'plateNumber'
	},
	{
		row: 3,
		col: 3,
		fieldName: 'registrationDate',
		type: 'date'
	},
	{
		row: 6,
		col: 3,
		fieldName: 'vendor'
	},
	{
		row: 9,
		col: 3,
		fieldName: 'year'
	},
	{
		row: 10,
		col: 3,
		fieldName: 'color'
	},
	{
		row: 11,
		col: 3,
		fieldName: 'bodyNumber'
	},
	{
		row: 22,
		col: 3,
		fieldName: 'transfer'
	},
	{
		row: 25,
		col: 3,
		fieldName: 'fullName'
	},
	{
		row: 26,
		col: 3,
		fieldName: 'registrationPlace'
	},
	{
		row: 27,
		col: 3,
		fieldName: 'birthDate',
		type: 'date'
	}
] as const
