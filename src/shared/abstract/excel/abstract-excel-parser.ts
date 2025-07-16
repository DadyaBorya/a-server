import { CellMapping } from '@shared/types'
import * as XLSX from 'xlsx'

export abstract class ExcelParser<T> {
	async parse(
		buffer: Buffer,
		cells: CellMapping<T>[]
	): Promise<Record<string, unknown>> {
		const rows = await this.getRowsFromBuffer(buffer)

		return this.extractData<T>(rows, cells)
	}

	async parseList(
		buffer: Buffer,
		cells: CellMapping<T>[],
		startedRowIndex: number
	): Promise<Record<string, unknown>[]> {
		const rows = await this.getRowsFromBuffer(buffer)
		return this.extractListData<T>(rows, cells, startedRowIndex)
	}

	async parseCustomList(
		buffer: Buffer,
		cells: number[],
		startedRowIndex: number
	): Promise<string[][]> {
		const rows = await this.getRowsFromBuffer(buffer)
		return this.extractCustomListData(rows, cells, startedRowIndex)
	}

	async getRowsFromBuffer(buffer: Buffer): Promise<string[][]> {
		const workbook = XLSX.read(buffer, { type: 'buffer' })

		const sheetName = workbook.SheetNames[0]
		const worksheet = workbook.Sheets[sheetName]

		const rows: string[][] = XLSX.utils.sheet_to_json(worksheet, {
			header: 1
		})

		return rows
	}

	extractData<T>(
		rows: string[][],
		cells: CellMapping<T>[]
	): Record<string, unknown> {
		const data = {} as Record<string, unknown>

		for (const cell of cells) {
			const value = rows[cell.row - 1]?.[cell.col - 1]

			if (value === undefined || value === '') {
				data[cell.fieldName] = null
				continue
			}

			if (cell.type === 'date' && Number(value)) {
				data[cell.fieldName] = this.formatDateFromExcelSerial(
					Number(value)
				)
				continue
			}

			data[cell.fieldName] = value as T[Extract<keyof T, string>]
		}

		return data
	}

	extractListData<T>(
		rows: string[][],
		cells: CellMapping<T>[],
		startedRowIndex: number
	): Record<string, unknown>[] {
		const list: Record<string, unknown>[] = []

		for (let i = startedRowIndex - 1; i < rows.length; i++) {
			const row = rows[i]
			const item: Record<string, unknown> = {}

			for (const cell of cells) {
				const value = row[cell.col - 1]

				if (value === undefined || value === '') {
					item[cell.fieldName] = null
				} else {
					item[cell.fieldName] = value as T[Extract<keyof T, string>]
				}
			}

			list.push(item)
		}

		return list
	}

	extractCustomListData(
		rows: string[][],
		cells: number[],
		startedRowIndex: number
	) {
		const list: string[][] = []

		for (let i = startedRowIndex - 1; i < rows.length; i++) {
			const row = rows[i]

			const items: string[] = []

			for (const cell of cells) {
				const value = row[cell - 1]

				if (value === undefined || value === '') {
					items.push(null)
				} else {
					items.push(value)
				}
			}

			list.push(items)
		}

		return list
	}

	private formatDateFromExcelSerial(serial: number): string {
		const date = XLSX.SSF.parse_date_code(serial)
		if (!date) return serial.toString()

		const day = String(date.d).padStart(2, '0')
		const month = String(date.m).padStart(2, '0')
		const year = date.y

		return `${day}.${month}.${year}`
	}
}
