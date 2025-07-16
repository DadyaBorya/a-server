import { Injectable } from '@nestjs/common'

import { ExcelParser } from '@/src/shared/abstract/excel'

import { DriverLicenceData } from '../interfaces'

@Injectable()
export class DriverLicenceParser extends ExcelParser<DriverLicenceData> {}
