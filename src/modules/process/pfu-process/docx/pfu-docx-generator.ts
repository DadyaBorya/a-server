import { Injectable } from '@nestjs/common'
import { DocxGenerator } from '@shared/abstract/docx'

import { PfuDocxData } from '../interfaces'

@Injectable()
export class PfuDocxGenerator extends DocxGenerator<PfuDocxData> {
	protected prepareData(data: PfuDocxData): Record<string, any> {
		return data
	}
}
