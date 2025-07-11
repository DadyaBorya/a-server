import { ReadStream } from 'fs'

export function validateFileFormat(
	filename: string,
	allowedFileFormats: string[]
) {
	const fileParts = filename.split('.')
	const extension = fileParts[fileParts.length - 1]

	return allowedFileFormats.includes(extension)
}

export async function validateFileSize(
	fileStream: ReadStream,
	allowedFileSizeInBytes
) {
	return new Promise((resolve, reject) => {
		let fileSizeInBytes = 0

		fileStream
			.on('data', (chunk: Buffer | string) => {
				if (typeof chunk === 'string') {
					fileSizeInBytes += Buffer.byteLength(chunk)
				} else {
					fileSizeInBytes += chunk.byteLength
				}
			})
			.on('end', () => {
				resolve(fileSizeInBytes <= allowedFileSizeInBytes)
			})
			.on('error', err => {
				reject(err)
			})
	})
}
