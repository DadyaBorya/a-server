import { Type } from 'class-transformer'
import { IsNotEmpty, IsString, Matches, ValidateNested } from 'class-validator'

import { DocumentData } from './document-data.interface'

export class PersonInfoData {
	@IsNotEmpty({ message: 'Прізвище обовʼязкове' })
	@IsString({ message: 'Прізвище має бути текстом' })
	lastName: string

	@IsNotEmpty({ message: 'Імʼя обовʼязкове' })
	@IsString({ message: 'Імʼя має бути текстом' })
	firstName: string

	@IsNotEmpty({ message: 'По батькові обовʼязкове' })
	@IsString({ message: 'По батькові має бути текстом' })
	patronymic: string

	@IsNotEmpty({ message: 'Дата народження обовʼязкова' })
	@Matches(/^\d{2}\.\d{2}\.\d{4}$/, {
		message: 'Дата народження має бути у форматі ДД.ММ.РРРР'
	})
	birthDate: string

	@IsNotEmpty({ message: 'Стать обовʼязкова' })
	@Matches(/^(чоловіча|жіноча)$/, {
		message: 'Стать повинна бути або "чоловіча", або "жіноча"'
	})
	gender: string

	@IsNotEmpty({ message: 'Місце народження обовʼязкове' })
	@IsString({ message: 'Місце народження має бути текстом' })
	birthPlace: string

	@IsNotEmpty({ message: 'Місце проживання обовʼязкове' })
	@IsString({ message: 'Місце проживання має бути текстом' })
	registrationPlace: string

	@IsNotEmpty({ message: 'РНОКПП обовʼязковий' })
	@Matches(/^\d{10}$/, {
		message: 'РНОКПП має складатися з 10 цифр'
	})
	taxId: string

	@IsNotEmpty({ message: 'Телефон обовʼязковий' })
	@Matches(/^380\d{9}$/, {
		message: 'Телефон має бути у форматі 380XXXXXXXXX'
	})
	phone: string

	@ValidateNested({ each: true })
	@Type(() => DocumentData)
	foreignPassportsData: DocumentData[]

	@ValidateNested({ each: true })
	@Type(() => DocumentData)
	passportsData: DocumentData[]
}
