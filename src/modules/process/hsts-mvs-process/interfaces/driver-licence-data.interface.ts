import { IsDate, IsNotEmpty, IsString, Length } from 'class-validator'

export class DriverLicenceData {
	@IsNotEmpty({ message: 'Прізвище обовʼязкове' })
	@IsString({ message: 'Прізвище має бути текстом' })
	lastName: string

	@IsNotEmpty({ message: 'Імʼя обовʼязкове' })
	@IsString({ message: 'Імʼя має бути текстом' })
	firstName: string

	@IsNotEmpty({ message: 'По батькові обовʼязкове' })
	@IsString({ message: 'По батькові має бути текстом' })
	patronymic: string

	@IsNotEmpty({ message: "Серія ПВ обов'язкова" })
	@IsString({ message: 'Серія ПВ має бути текстом' })
	series: string

	@IsNotEmpty({ message: "Номер ПВ обов'язковий" })
	@Length(6, 6, { message: 'Номер ПВ повинен складатися з 6 цифр' })
	number: string

	@IsNotEmpty({ message: 'Дата народження обовʼязкова' })
	@IsDate({ message: 'Дата народження повинна бути коректною датою' })
	birthDate: Date

	@IsNotEmpty({ message: 'Дата видачі обовʼязкова' })
	@IsDate({ message: 'Дата видачі повинна бути коректною датою' })
	issueDate: Date

	@IsNotEmpty({ message: 'Дата закінчення обовʼязкова' })
	@IsDate({ message: 'Дата закінчення повинна бути коректною датою' })
	expirationDate: Date

	@IsNotEmpty({ message: 'Ким видано — обовʼязкове поле' })
	@IsString({ message: "Поле 'Ким видано' має бути текстом" })
	issuedBy: string

	@IsNotEmpty({ message: 'Категорії обовʼязкові' })
	@IsString({ message: 'Категорії мають бути текстом' })
	categories: string

	@IsNotEmpty({ message: 'Статус обовʼязковий' })
	@IsString({ message: 'Статус має бути текстом' })
	status: string

	@IsNotEmpty({ message: 'Місце реєстрації обовʼязкове' })
	@IsString({ message: 'Місце реєстрації має бути текстом' })
	registrationPlace: string
}
