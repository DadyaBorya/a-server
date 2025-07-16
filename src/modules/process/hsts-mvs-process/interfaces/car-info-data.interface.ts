import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CarInfoData {
	@IsNotEmpty({ message: 'Номер та серія знака обовʼязкові' })
	@IsString({ message: 'Номер та серія мають бути текстом' })
	plateNumber: string

	@IsNotEmpty({ message: 'Дата реєстрація обовʼязкова' })
	@IsDate({ message: 'Дата реєстрації повинна бути коректною датою' })
	registrationDate: Date

	@IsNotEmpty({ message: 'Марка та модель знака обовʼязкові' })
	@IsString({ message: 'Марка та модель мають бути текстом' })
	vendor: string

	@IsNotEmpty({ message: 'Рік машини обовʼязковий' })
	@IsString({ message: 'Рік машини має бути текстом' })
	year: string

	@IsNotEmpty({ message: 'Колір машини обовʼязковий' })
	@IsString({ message: 'Колір машини має бути текстом' })
	color: string

	@IsOptional()
	@IsString({ message: 'Номер кузова має бути текстом' })
	bodyNumber: string

	@IsNotEmpty({ message: 'Назва ТО обовʼязкова' })
	@IsString({ message: 'Назва ТО має бути текстом' })
	transfer: string

	@IsNotEmpty({ message: 'Місце реєстрації обовʼязкове' })
	@IsString({ message: 'Місце реєстрації має бути текстом' })
	registrationPlace: string

	@IsNotEmpty({ message: 'ПІБ обовʼязковий' })
	@IsString({ message: 'ПІБ має бути текстом' })
	fullName: string

	@IsNotEmpty({ message: 'Дата народження обовʼязкова' })
	@IsDate({ message: 'Дата народження повинна бути коректною датою' })
	birthDate: Date
}
