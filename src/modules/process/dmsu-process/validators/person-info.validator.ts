import { Injectable } from '@nestjs/common'
import { ProcessValidator } from '@shared/abstract/validators'

import { PersonInfoData } from '../interfaces'

@Injectable()
export class PersonInfoValidator extends ProcessValidator<PersonInfoData> {}
