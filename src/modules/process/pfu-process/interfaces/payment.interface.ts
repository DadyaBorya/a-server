import { Type } from 'class-transformer'
import {
	IsDate,
	IsNotEmpty,
	IsOptional,
	IsString,
	Matches,
	ValidateNested
} from 'class-validator'

export class PfuPayment {
	@IsNotEmpty({ message: 'Місяць є обовʼязковим' })
	@IsDate({ message: 'Місяць повинен бути коректною датою' })
	month: Date | string

	@IsNotEmpty({ message: 'Код страхувальника є обовʼязковим' })
	@IsString({ message: 'Код страхувальника має бути текстом' })
	insurerCode: string

	@IsNotEmpty({ message: 'Назва страхувальника є обовʼязковою' })
	@IsString({ message: 'Назва страхувальника має бути текстом' })
	insurerName: string

	@IsOptional()
	isLast?: boolean
}

export class PfuInput {
	@IsNotEmpty({ message: 'Прізвище обовʼязкове' })
	@IsString({ message: 'Прізвище має бути текстом' })
	lastName: string

	@IsNotEmpty({ message: 'Імʼя обовʼязкове' })
	@IsString({ message: 'Імʼя має бути текстом' })
	firstName: string

	@IsNotEmpty({ message: 'По батькові обовʼязкове' })
	@IsString({ message: 'По батькові має бути текстом' })
	patronymic: string

	@IsNotEmpty({ message: 'РНОКПП обовʼязковий' })
	@Matches(/^\d{10}$/, {
		message: 'РНОКПП має складатися з 10 цифр'
	})
	taxId: string

	@ValidateNested({ each: true })
	@Type(() => PfuPayment)
	payments: PfuPayment[]
}
