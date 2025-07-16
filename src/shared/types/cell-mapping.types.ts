export type CellMapping<T> = {
	row: number
	col: number
	fieldName: Extract<keyof T, string>
	type?: 'date' | 'string' | 'number'
}
