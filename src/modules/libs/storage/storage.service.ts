import { Inject, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Response } from 'express'
import { FileUpload } from 'graphql-upload'
import { lookup } from 'mime-types'
import { Client } from 'minio'
import { MINIO_CONNECTION } from 'nestjs-minio'
import * as Path from 'path'
import { v4 } from 'uuid'

import { CreateStorageFileDto } from './dto'
import { StorageFileNotFoundException } from './exceptions'
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

	async createFromBuffer(
		buffer: Buffer,
		path: string,
		outputFilename: string
	) {
		const id = v4()
		const size = buffer.length
		const extension = 'docx'

		const dto: CreateStorageFileDto = {
			id,
			inputFilename: outputFilename,
			outputFilename,
			extension,
			size,
			bucket: this.dataBucket,
			path: `${path}/${id}.${extension}`
		}

		const fileDb = await this.storageRepository.create(dto)

		await this.minioClient.putObject(dto.bucket, dto.path, buffer, size, {
			'Content-Type':
				'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
		})

		return fileDb
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

	async findById(id: string) {
		const result = await this.storageRepository.findById(id)

		if (!result) {
			throw new StorageFileNotFoundException()
		}

		return result
	}

	async findPlainFileByPath(bucket: string, path: string) {
		const dataStream = await this.minioClient
			.getObject(bucket, path)
			.catch(() => {
				return null
			})

		if (!dataStream) {
			throw new StorageFileNotFoundException()
		}

		const chunks: Buffer[] = []

		return new Promise<Buffer>((resolve, reject) => {
			dataStream.on('data', chunk => chunks.push(chunk))
			dataStream.on('end', () => resolve(Buffer.concat(chunks)))
			dataStream.on('error', err => reject(err))
		})
	}

	async findBufferById(id: string) {
		const file = await this.findById(id)

		const dataStream = await this.minioClient
			.getObject(file.bucket, file.path)
			.catch(() => {
				return null
			})

		if (!dataStream) {
			throw new StorageFileNotFoundException()
		}

		const chunks: Buffer[] = []

		const buffer = await new Promise<Buffer>((resolve, reject) => {
			dataStream.on('data', chunk => chunks.push(chunk))
			dataStream.on('end', () => resolve(Buffer.concat(chunks)))
			dataStream.on('error', err => reject(err))
		})

		const filename = file.inputFilename || file.outputFilename
		const mimetype = lookup(filename) || 'application/octet-stream'

		return { buffer, filename, mimetype }
	}

	async downloadFile(id: string, res: Response) {
		const { mimetype, buffer, filename } = await this.findBufferById(id)

		res.setHeader(
			'Content-Disposition',
			`attachment; filename="file.xls"; filename*=UTF-8''${encodeURIComponent(filename)}`
		)
		res.setHeader('Content-Type', mimetype)
		res.send(buffer)
	}
}
