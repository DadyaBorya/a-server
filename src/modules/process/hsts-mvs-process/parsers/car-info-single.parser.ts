import { Injectable } from '@nestjs/common'
import { ExcelParser } from '@shared/abstract/excel'

import { CarInfoData } from '../interfaces'

@Injectable()
export class CarInfoSingleParser extends ExcelParser<CarInfoData> {}
