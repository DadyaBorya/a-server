import { Injectable } from '@nestjs/common'
import { Prisma, Process, ProcessType } from '@prisma/generated'

import { ProcessRequestNotFoundException } from './exceptions'
import { ListProcessesInput } from './inputs'
import { ProcessRepository } from './process.repository'

@Injectable()
export class ProcessCoreService {
	constructor(private readonly processRepository: ProcessRepository) {}

	async findAll(input: ListProcessesInput, userId?: string) {
		const {
			page,
			limit,
			orderBy = 'createdAt',
			orderDirection,
			searchFor
		} = input

		const skip = (page - 1) * limit
		const take = limit

		const where: Prisma.ProcessWhereInput = {
			...(searchFor && {
				OR: [
					{
						owner: {
							contains: searchFor,
							mode: 'insensitive'
						}
					},
					{
						id: {
							contains: searchFor,
							mode: 'insensitive'
						}
					},
					{
						user: {
							displayName: {
								contains: searchFor,
								mode: 'insensitive'
							}
						}
					}
				]
			}),
			...(userId && { userId })
		}

		const order: Prisma.ProcessOrderByWithRelationInput = {
			[orderBy]: orderDirection.toLowerCase()
		}

		const [data, total] = await Promise.all([
			this.processRepository.findMany({
				where,
				orderBy: order,
				skip,
				take,
				include: { user: true }
			}),
			this.processRepository.count({ where })
		])

		const pages = Math.ceil(total / limit)
		const hasNext = page < pages
		const hasPrev = page > 1

		const result = {
			data,
			total,
			pages,
			currentPage: page,
			hasNext,
			hasPrev
		}

		return result
	}

	async createRequest(userId: string, type: ProcessType) {
		return this.processRepository.create(userId, type)
	}

	async findById(id: string) {
		const result = await this.processRepository.findById(id)

		if (!result) {
			throw new ProcessRequestNotFoundException()
		}

		return result
	}

	async update(id: string, data: Partial<Process>) {
		await this.findById(id)

		return this.processRepository.update(id, data)
	}
}
