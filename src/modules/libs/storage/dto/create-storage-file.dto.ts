export class CreateStorageFileDto {
	id: string
	inputFilename: string
	outputFilename?: string
	extension: string
	size: number
	bucket: string
	path: string
}
