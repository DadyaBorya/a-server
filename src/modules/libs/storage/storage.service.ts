import { Inject, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { FileUpload } from 'graphql-upload'
import { Client } from 'minio'
import { MINIO_CONNECTION } from 'nestjs-minio'
import * as Path from 'path'
import { v4 } from 'uuid'

import { CreateStorageFileDto } from './dto'
import { StorageRepository } from './storage.repository'

@Injectable()
export class StorageService {
	private readonly dataBucket: string

	constructor(
		@Inject(MINIO_CONNECTION) private readonly minioClient: Client,
		private readonly configService: ConfigService,
		private readonly storageRepository: StorageRepository
	) {
		this.dataBucket =
			this.configService.getOrThrow<string>('MINIO_DATA_BUCKET')

		this.createDataBucket()
	}

	private async createDataBucket() {
		const exists = await this.minioClient.bucketExists(this.dataBucket)
		if (!exists) {
			await this.minioClient.makeBucket(this.dataBucket)
		}
	}

	private async getFileSizeFromBuffer(
		fileUpload: FileUpload
	): Promise<number> {
		const stream = fileUpload.createReadStream()
		const chunks: Buffer[] = []

		for await (const chunk of stream) {
			chunks.push(chunk)
		}

		const buffer = Buffer.concat(chunks)
		return buffer.length
	}

	async create(file: FileUpload, path: string) {
		const id = v4()
		const size = await this.getFileSizeFromBuffer(file)
		const extension = Path.extname(file.filename).substring(1)

		const dto: CreateStorageFileDto = {
			id,
			inputFilename: file.filename,
			extension,
			size,
			bucket: this.dataBucket,
			path: `${path}/${id}.${extension}`
		}

		const fileDb = await this.storageRepository.create(dto)

		await this.minioClient.putObject(
			dto.bucket,
			dto.path,
			file.createReadStream(),
			size,
			{
				'Content-Type': file.mimetype
			}
		)

		return fileDb
	}
}
