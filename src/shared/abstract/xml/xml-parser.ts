import { BadRequestException } from '@nestjs/common'
import { DOMParser } from '@xmldom/xmldom'

export abstract class XmlParser {
	extract(xmlString: string) {
		const parser = new DOMParser()
		const xmlDoc = parser.parseFromString(xmlString, 'text/xml')

		const parseError = xmlDoc.getElementsByTagName('parsererror')[0]
		if (parseError) {
			throw new BadRequestException(
				'Невірний формат XML: ' + parseError.textContent
			)
		}

		return xmlDoc.documentElement
	}
}
