import Docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'

export abstract class DocxGenerator<T> {
	public generate(templateBuffer: Buffer, data: T): Buffer {
		const zip = new PizZip(templateBuffer)

		const docxtemplater = new Docxtemplater(zip, {
			paragraphLoop: true,
			linebreaks: true
		})

		const preparedData = this.prepareData(data)

		docxtemplater.render(preparedData)

		return docxtemplater.toBuffer()
	}

	protected abstract prepareData(data: T): Record<string, any>
}
