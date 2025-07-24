import { Injectable } from '@nestjs/common'
import { XmlParser } from '@shared/abstract/xml'
import { Element } from '@xmldom/xmldom'

import { PfuInput, PfuPayment } from '../interfaces'

@Injectable()
export class PfuInputFileParser extends XmlParser {
	parse(rawXml: Element): PfuInput {
		const getText = (parent: Element, tag: string) =>
			parent.getElementsByTagName(tag)?.[0]?.textContent?.trim() || ''

		const lastName = getText(rawXml, 'LAST_NAME')
		const firstName = getText(rawXml, 'FIRST_NAME')
		const patronymic = getText(rawXml, 'SECOND_NAME')
		const taxId = getText(rawXml, 'IPN')

		const paymentElements = rawXml.getElementsByTagName('PAYMENT')
		const payments: PfuPayment[] = []

		for (let i = 0; i < paymentElements.length; i++) {
			const paymentEl = paymentElements[i]

			const month = this.parseMonthString(getText(paymentEl, 'MONTH'))
			const insurerCode = getText(paymentEl, 'INSURER_CODE')
			const insurerName = getText(paymentEl, 'INSURER_NAME')

			payments.push({
				month,
				insurerCode,
				insurerName
			})
		}

		return {
			lastName,
			firstName,
			patronymic,
			taxId,
			payments
		}
	}

	private parseMonthString(monthStr: string): Date | null {
		try {
			if (!monthStr) {
				return null
			}

			if (monthStr.length !== 8) {
				return null
			}

			const day = parseInt(monthStr.substring(0, 2), 10)
			const month = parseInt(monthStr.substring(2, 4), 10)
			const year = parseInt(monthStr.substring(4, 8), 10)

			return new Date(year, month - 1, day)
		} catch {
			return null
		}
	}
}
