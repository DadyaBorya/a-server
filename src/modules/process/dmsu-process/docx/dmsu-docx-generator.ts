import { Injectable } from '@nestjs/common'
import { DocxGenerator } from '@shared/abstract/docx'

import { DmsuDocxData } from '../interfaces'

@Injectable()
export class DmsuDocxGenerator extends DocxGenerator<DmsuDocxData> {
	protected prepareData(data: DmsuDocxData): Record<string, any> {
		return data
	}
}
