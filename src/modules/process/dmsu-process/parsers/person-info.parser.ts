import { Injectable } from '@nestjs/common'
import { PdfParser } from '@shared/abstract/pdf'

import { DocumentData, PersonInfoData } from '../interfaces'

@Injectable()
export class PersonInfoParser extends PdfParser {
	async parse(buffer: Buffer) {
		const text = await this.exctract(buffer)

		const excludeRegex =
			/^(Запит здійснив|Підстава запиту|Дата запиту|Користувач )/

		const lines = text
			.split('\n')
			.map(l => l.trim())
			.filter(l => l.length > 0 && !excludeRegex.test(l))

		this.excludeDuplicateLines(lines)

		const joinedText = lines.join('\n')

		return this.parsePersonInfoData(joinedText)
	}

	private parseForeignPassports(text: string): DocumentData[] {
		return this.parseDocumentBlock(
			this.extractBlock(
				text,
				'Паспорт(и) громадянина України для виїзду за кордон',
				['Свідоцтво про народження', 'Паспорт громадянина України']
			)
		)
	}

	private parsePassports(text: string): DocumentData[] {
		return this.parseDocumentBlock(
			this.extractBlock(text, 'Паспорт громадянина України', [
				'Свідоцтво про народження',
				'Паспорт(и) громадянина України для виїзду за кордон'
			])
		)
	}

	private parseDocumentBlock(block: string): DocumentData[] {
		if (!block) return []

		const passportEntries = block.split(/(?=Номер)/g).filter(Boolean)

		return passportEntries.map(entry => {
			const numberMatch = entry.match(/Номер([А-ЯЁЄІЇҐA-Z]*[\d\-]+)/i)
			const issuedAtMatch = entry.match(
				/Дата видачі:(\d{2}\.\d{2}\.\d{4})/
			)
			const expiresAtMatch = entry.match(
				/Дійсний до:([\s\S]*?)(Стан документа:|Орган видачі:|$)/
			)
			const statusMatch = entry.match(/Стан документа:([^\n]+)/)
			const issuerMatch = entry.match(/Орган видачі:([\s\S]+)/)

			return {
				number: numberMatch ? numberMatch[1].trim() : '',
				issuedAt: issuedAtMatch ? issuedAtMatch[1].trim() : '',
				expiresAt: expiresAtMatch ? expiresAtMatch[1].trim() : '',
				status: statusMatch ? statusMatch[1].trim() : '',
				issuer: issuerMatch
					? issuerMatch[1].replace(/\s+/g, ' ').trim()
					: ''
			}
		})
	}

	private extractBlock(
		text: string,
		startMarker: string,
		endMarkers: string[]
	): string {
		const lines = text
			.split(/\r?\n/)
			.map(l => l.trim())
			.filter(Boolean)

		const startIndex = lines.findIndex(line => line.includes(startMarker))
		if (startIndex === -1) return ''

		const endIndex = lines.findIndex(
			(line, idx) =>
				endMarkers.some(marker => line.includes(marker)) &&
				idx > startIndex
		)

		const sliceEnd = endIndex === -1 ? lines.length : endIndex

		return lines.slice(startIndex + 1, sliceEnd).join('\n')
	}

	private parsePersonInfoData(text: string): PersonInfoData {
		function getRegistrationPlace(text: string): string {
			const regex =
				/Місце проживання\/\s*перебування([\s\S]+?)Паспорт громадянина України/
			const match = text.match(regex)

			return match ? match[1].replace(/\s+/g, ' ').trim() : ''
		}

		function getBirthPlace(text: string) {
			const regex = /Місце народження([\s\S]+?)Місце проживання/
			const match = text.match(regex)

			return match ? match[1].trim().replace(/\s+/g, ' ') : ''
		}

		function getValue(text: string, label: string): string {
			const safeLabel = label.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
			const regex = new RegExp(
				`${safeLabel}([А-ЯІЄҐЇЬа-яієґїь0-9'.\\-+ ]+)`
			)
			const match = text.match(regex)

			return match ? match[1].trim() : null
		}

		return {
			lastName: getValue(text, 'Прізвище'),
			firstName: getValue(text, 'Ім\`я'),
			patronymic: getValue(text, 'По батькові'),
			birthDate: getValue(text, 'Дата народження'),
			gender: getValue(text, 'Стать'),
			birthPlace: getBirthPlace(text),
			registrationPlace: getRegistrationPlace(text),
			taxId: getValue(text, 'РНОКПП'),
			phone: getValue(text, 'Телефон+'),
			passportsData: this.parsePassports(text),
			foreignPassportsData: this.parseForeignPassports(text)
		}
	}

	private excludeDuplicateLines(lines: string[]) {
		const excludeLines = [
			'Паспорт громадянина України',
			'Свідоцтво про народження',
			'Паспорт(и) громадянина України для виїзду за кордон'
		]

		for (const excludeLine of excludeLines) {
			const firstIndex = lines.indexOf(excludeLine)

			if (firstIndex !== -1) {
				let nextIndex = lines.indexOf(excludeLine, firstIndex + 1)

				while (nextIndex !== -1) {
					lines.splice(nextIndex, 1)
					nextIndex = lines.indexOf(excludeLine, firstIndex + 1)
				}
			}
		}
	}
}
