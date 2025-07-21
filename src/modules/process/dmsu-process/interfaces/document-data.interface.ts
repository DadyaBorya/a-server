import { IsNotEmpty, IsString, Matches } from 'class-validator'

export class DocumentData {
	@IsNotEmpty({ message: 'Номер документа обовʼязковий' })
	@IsString({ message: 'Номер документа має бути рядком' })
	number: string

	@IsNotEmpty({ message: 'Дата видачі обовʼязкова' })
	@Matches(/^\d{2}\.\d{2}\.\d{4}$/, {
		message: 'Дата видачі має бути у форматі ДД.ММ.РРРР'
	})
	issuedAt: string

	@IsString({ message: 'Дата закінчення має бути рядком' })
	expiresAt: string

	@IsNotEmpty({ message: 'Статус обовʼязковий' })
	@IsString({ message: 'Статус має бути рядком' })
	status: string

	@IsNotEmpty({ message: 'Орган видачі обовʼязковий' })
	@IsString({ message: 'Орган видачі має бути рядком' })
	issuer: string
}
