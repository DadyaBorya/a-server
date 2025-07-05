import { Inject, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as Upload from 'graphql-upload/Upload.js'
import { Client } from 'minio'
import { MINIO_CONNECTION } from 'nestjs-minio'

@Injectable()
export class StorageService {
	private readonly bucket: string

	constructor(
		@Inject(MINIO_CONNECTION) private readonly minioClient: Client,
		private readonly configService: ConfigService
	) {
		this.bucket = this.configService.getOrThrow<string>('MINIO_BUCKET')
	}

	// TODO! NEED TO CHECK
	async upload(file: Upload, path: string) {
		// const record = this.storageFileRepository.create({
		// 	inputFilename: file.originalname,
		// 	extention: ext,
		// 	size: file.size,
		// 	bucket: dto.bucket
		// })

		console.log(file)

		// const chunks: Buffer[] = []

		// for await (const chunk of file.createReadStream()) {
		// 	chunks.push(chunk)
		// }

		// const buffer = Buffer.concat(chunks)
	}
}
