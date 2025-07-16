import { BadRequestException, Injectable } from '@nestjs/common'
import { ExcelParser } from '@shared/abstract/excel'

import { CarInfoData } from '../interfaces'

@Injectable()
export class CarInfoMultiParser extends ExcelParser<CarInfoData> {
	parseRowsCol(data: string[][]): Record<keyof CarInfoData, unknown>[] {
		const list: Record<keyof CarInfoData, unknown>[] = []

		for (const row of data) {
			if (row[0].includes('ЗНЯТИЙ З ОБЛІКУ')) {
				continue
			}

			const obj = {} as Record<keyof CarInfoData, unknown>

			const firstCol = row[0]
			const secondCol = row[1]
			const thirdCol = row[2]

			obj.plateNumber = firstCol.split('\n')[0]?.trim() || null

			obj.registrationDate =
				firstCol.match(/(\d{2}\.\d{2}\.\d{4})/)?.[1] ?? null

			obj.vendor =
				secondCol.match(/^(.+?), \(\d{4}\),/)?.[1].trim() ?? null

			obj.year = secondCol.match(/\((\d{4})\)/)?.[1] ?? null

			obj.color = secondCol.match(/\),\s*(\p{L}+),/u)?.[1] ?? null

			obj.bodyNumber =
				secondCol.match(/№ куз\. *([A-Z0-9]+)/)?.[1] ?? null

			obj.transfer = secondCol.match(/(\d+ - .+)/)?.[1] ?? null

			obj.registrationPlace = thirdCol.match(/\n(.+)$/)?.[1] ?? null

			obj.fullName =
				thirdCol.match(/^([А-ЯІЇЄA-Z\sʼ']+),/u)?.[1].trim() ?? null

			obj.birthDate =
				thirdCol.match(/нар\.\s*(\d{2}\.\d{2}\.\d{4})/)?.[1] ?? null

			list.push(obj)
		}

		if (list.length === 0) {
			throw new BadRequestException('Файл не валідний')
		}

		return list
	}
}
