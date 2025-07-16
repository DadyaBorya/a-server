import { Injectable } from '@nestjs/common'
import { DocxGenerator } from '@shared/abstract/docx'

import { HstsMvsDocxData } from '../interfaces'

@Injectable()
export class HstsMvsDocxGenerator extends DocxGenerator<HstsMvsDocxData> {
	protected prepareData(data: HstsMvsDocxData): Record<string, any> {
		return {
			...data,
			hasMoreThanOneCar: data.cars.length > 1,
			cars: data.cars.map((car, index) => ({
				...car,
				isFirst: index === 0
			}))
		}
	}
}
