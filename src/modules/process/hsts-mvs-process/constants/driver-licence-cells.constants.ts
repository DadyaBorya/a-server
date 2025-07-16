import { CellMapping } from '@shared/types'

import { DriverLicenceData } from '../interfaces'

export const DRIVER_LICENCE_CELLS: CellMapping<DriverLicenceData>[] = [
	{
		row: 5,
		col: 2,
		fieldName: 'lastName'
	},
	{
		row: 5,
		col: 3,
		fieldName: 'firstName'
	},
	{
		row: 5,
		col: 4,
		fieldName: 'patronymic'
	},
	{
		row: 5,
		col: 13,
		fieldName: 'birthDate',
		type: 'date'
	},
	{
		row: 5,
		col: 15,
		fieldName: 'series'
	},
	{
		row: 5,
		col: 16,
		fieldName: 'number'
	},
	{
		row: 5,
		col: 17,
		fieldName: 'issueDate',
		type: 'date'
	},
	{
		row: 5,
		col: 18,
		fieldName: 'expirationDate',
		type: 'date'
	},
	{
		row: 5,
		col: 19,
		fieldName: 'issuedBy'
	},
	{
		row: 5,
		col: 20,
		fieldName: 'categories'
	},
	{
		row: 5,
		col: 23,
		fieldName: 'registrationPlace'
	},
	{
		row: 5,
		col: 25,
		fieldName: 'status'
	}
] as const
