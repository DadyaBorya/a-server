import * as pdfParse from 'pdf-parse'

export abstract class PdfParser {
	async exctract(buffer: Buffer): Promise<string> {
		const data = await pdfParse(buffer)
		return data.text
	}
}
