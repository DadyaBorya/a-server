import Docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'

const ImageModule = require('docxtemplater-image')

export abstract class DocxGenerator<T> {
	public generate(templateBuffer: Buffer, data: T): Buffer {
		const zip = new PizZip(templateBuffer)

		const imageModule = new ImageModule({
			getImage: function (tagValue) {
				return Buffer.from(tagValue, 'base64')
			},
			getSize: function () {
				return [113, 151]
			}
		})

		const docxtemplater = new Docxtemplater(zip, {
			paragraphLoop: true,
			linebreaks: true,
			modules: [imageModule]
		})

		const preparedData = this.prepareData(data)

		docxtemplater.render(preparedData)

		return docxtemplater.toBuffer()
	}

	protected abstract prepareData(data: T): Record<string, any>
}
