import { OllamaService } from '@modules/libs/ollama'
import { Injectable } from '@nestjs/common'
import { capitalizeFullName, translateUkrainian } from '@shared/utils'

import { DmsuStage } from '@/prisma/generated'

import {
	NORMALIZE_BIRTH_PLACE_PROMPT,
	NORMALIZE_GENITIVE_FULLNAME_PROMPT,
	NORMALIZE_ISSUER_PROMPT,
	NORMALIZE_REGISTARION_ADDRESS_PROMPT
} from '../constants'
import { DmsuProcessService } from '../dmsu-process.service'
import { DmsuDocxData, DocumentData, PersonInfoData } from '../interfaces'

@Injectable()
export class DmsuProcessModifier {
	constructor(
		private readonly dmsuService: DmsuProcessService,
		private readonly ollama: OllamaService
	) {}

	async modify(
		processId: string,
		personInfoData: PersonInfoData,
		imageBuffer: Buffer,
		isAi: boolean
	) {
		await this.dmsuService.update(processId, {
			stage: DmsuStage.MODIFY_DATA
		})

		return this.mapPersonInfo(personInfoData, imageBuffer, processId, isAi)
	}

	private async mapPersonInfo(
		data: PersonInfoData,
		imageBuffer: Buffer,
		processId: string,
		isAi: boolean
	): Promise<DmsuDocxData> {
		return {
			isMale: data.gender === 'чоловіча',

			taxId: data.taxId,
			phone: data.phone,
			hasPassports: data.passportsData.length != 0,
			hasForeignPassports: data.foreignPassportsData.length !== 0,
			hasMoreThanOnePassport: data.passportsData.length > 1,
			hasMoreThanOneForeignPassport: data.foreignPassportsData.length > 1,
			imageYear: this.getLastImageYear(
				data.passportsData,
				data.foreignPassportsData
			),
			translitFullName: this.translitFullName(
				data.lastName,
				data.firstName,
				data.patronymic
			),
			genitiveFullname: await this.normalizeGenitiveFullname(
				processId,
				isAi,
				data.lastName,
				data.firstName,
				data.patronymic
			),
			birthDate: data.birthDate,
			birthPlace: await this.normalizeBirthPlace(
				processId,
				isAi,
				data.birthPlace
			),
			registrationPlace: await this.normalizeRegistrationPlace(
				processId,
				isAi,
				data.registrationPlace
			),
			image: imageBuffer.toString('base64'),
			passports: await this.mapDocuments(
				processId,
				isAi,
				data.passportsData,
				'PASSPORT'
			),
			foreignPassports: await this.mapDocuments(
				processId,
				isAi,
				data.foreignPassportsData,
				'FOREIGN_PASSPORT'
			)
		}
	}

	private async mapDocuments(
		processId: string,
		isAi: boolean,
		documents: DocumentData[],
		type: 'PASSPORT' | 'FOREIGN_PASSPORT'
	) {
		const lastIndex = documents.length - 1

		const result = await Promise.all(
			documents.map(async (doc, index) => {
				return {
					number: doc.number,
					issuedAt: doc.issuedAt,
					expiresAt: this.normalizeDocumentExpiresAt(doc.expiresAt),
					status: doc.status,
					statusBool: doc.status.toLowerCase() === 'дійсний',
					issuer: await this.normalizeIssuer(
						processId,
						isAi,
						doc.issuer,
						type
					),
					isLast: index === lastIndex
				}
			})
		)

		return result
	}

	private normalizeDocumentExpiresAt(expiresAt: string) {
		const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/
		if (dateRegex.test(expiresAt)) {
			return `до ${expiresAt}`
		}
		return expiresAt
	}

	private async normalizeIssuer(
		processId: string,
		isAi: boolean,
		issuer: string,
		type: 'PASSPORT' | 'FOREIGN_PASSPORT'
	) {
		if (type === 'PASSPORT') {
			await this.dmsuService.update(processId, {
				stage: DmsuStage.NORMALIZE_PASSPORTS_ISSUER
			})
		} else {
			await this.dmsuService.update(processId, {
				stage: DmsuStage.NORMALIZE_FOREIGN_PASSPORTS_ISSUER
			})
		}

		if (!isAi) {
			return issuer
		}

		return this.ollama.execute(NORMALIZE_ISSUER_PROMPT.build(issuer))
	}

	private getLastImageYear(
		passports: DocumentData[],
		foreignPassports: DocumentData[]
	) {
		const allDocs = [...passports, ...foreignPassports]

		const years = allDocs
			.map(doc => {
				const match = doc.issuedAt.match(/^(\d{2})\.(\d{2})\.(\d{4})$/)
				return match ? parseInt(match[3], 10) : null
			})
			.filter((year): year is number => year !== null)

		if (years.length === 0) return 0

		return Math.max(...years)
	}

	private async normalizeGenitiveFullname(
		processId: string,
		isAi: boolean,
		lastName: string,
		firstName: string,
		patronymic: string
	) {
		await this.dmsuService.update(processId, {
			stage: DmsuStage.NORMALIZE_GENITIVE_FULLNAME
		})

		const fullName = capitalizeFullName(lastName, firstName, patronymic)

		if (!isAi) {
			return fullName
		}

		return this.ollama.execute(
			NORMALIZE_GENITIVE_FULLNAME_PROMPT.build(fullName)
		)
	}

	private async normalizeBirthPlace(
		processId: string,
		isAi: boolean,
		birthPlace: string
	) {
		await this.dmsuService.update(processId, {
			stage: DmsuStage.NORMALIZE_BIRTH_PLACE
		})

		if (!isAi) {
			return birthPlace
		}

		return this.ollama.execute(
			NORMALIZE_BIRTH_PLACE_PROMPT.build(birthPlace)
		)
	}

	private async normalizeRegistrationPlace(
		processId: string,
		isAi: boolean,
		registrationPlace: string
	) {
		await this.dmsuService.update(processId, {
			stage: DmsuStage.NORMALIZE_REGISTARION_ADDRESS
		})

		if (!isAi) {
			return registrationPlace
		}

		return this.ollama.execute(
			NORMALIZE_REGISTARION_ADDRESS_PROMPT.build(registrationPlace)
		)
	}

	private translitFullName(
		lastName: string,
		firstName: string,
		patronymic: string
	) {
		const formattedFirstName = firstName
			.split(' ')
			.map(
				name =>
					name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
			)
			.join(' ')

		const formattedPatronymic = patronymic
			.split(' ')
			.map(
				name =>
					name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
			)
			.join(' ')

		return `${lastName} (${translateUkrainian('ОГОРОДНІЙ')}) ${formattedFirstName} (${translateUkrainian(firstName)}) ${formattedPatronymic}`
	}
}
