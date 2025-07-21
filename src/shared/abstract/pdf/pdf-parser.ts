import * as pdfParse from 'pdf-parse'

export abstract class PdfParser {
	async exctract(buffer: Buffer): Promise<string> {
		const data = await pdfParse(buffer)

		return this.normalizeNoToNumero(data.text)
	}

	private normalizeNoToNumero(text: string): string {
		return text.replace(/\bNo\s*(\d+)/g, '№$1')
	}
}
