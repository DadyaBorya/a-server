import { Injectable } from '@nestjs/common'
import { ProcessValidator } from '@shared/abstract/validators'

import { PfuInput } from '../interfaces'

@Injectable()
export class PfuInputValidator extends ProcessValidator<PfuInput> {}
