import { StorageService } from '@modules/libs/storage'
import { BadRequestException, Injectable } from '@nestjs/common'

import { HstsMvsStage } from '@/prisma/generated'

import { CAR_SINGLE_INFO_CELLS } from '../constants'
import { HstsMvsProcessService } from '../hsts-mvs-process.service'
import { CarInfoData } from '../interfaces'
import { CarInfoMultiParser, CarInfoSingleParser } from '../parsers'
import { CarInfoMultiTransform, CarInfoSingleTransform } from '../transform'
import { CarInfoValidator } from '../validators'

@Injectable()
export class HstsMvsCarInfoProcessor {
	constructor(
		private readonly storage: StorageService,
		private readonly hstsMvsSerive: HstsMvsProcessService,
		private readonly carInfoSingleParser: CarInfoSingleParser,
		private readonly carInfoSingleTransform: CarInfoSingleTransform,
		private readonly carInfoValidator: CarInfoValidator,
		private readonly carInfoMultiParser: CarInfoMultiParser,
		private readonly carInfoMultiTransform: CarInfoMultiTransform
	) {}

	async process(
		processId: string,
		hstsMvsProcess: any,
		birthDate: Date,
		fullName: string
	) {
		await this.hstsMvsSerive.update(processId, {
			stage: HstsMvsStage.PARSE_CAR_INFO
		})

		const carInfoBuffer = await this.storage.findBufferById(
			hstsMvsProcess.carInfoFileId
		)

		const carInfoRows = await this.carInfoSingleParser.getRowsFromBuffer(
			carInfoBuffer.buffer
		)

		if (carInfoRows[0][0] === 'РЕЄСТРАЦІЙНА КАРТКА ТЗ') {
			return this.processSingleCarInfo(
				processId,
				carInfoBuffer.buffer,
				fullName,
				birthDate
			)
		} else if (
			carInfoRows[0][0] ===
			'Результати аналітичного пошуку ТЗ по "НАІС ДДАІ" МВС України'
		) {
			return this.processMultiCarInfo(
				processId,
				carInfoBuffer.buffer,
				fullName,
				birthDate
			)
		}

		throw new BadRequestException('Файл невалідний')
	}

	private async processSingleCarInfo(
		processId: string,
		buffer: Buffer,
		fullName: string,
		birthDate: Date
	) {
		const carInfoParsedSingleData = await this.carInfoSingleParser.parse(
			buffer,
			CAR_SINGLE_INFO_CELLS
		)

		const carInfoParsedData = this.carInfoSingleTransform.transform(
			carInfoParsedSingleData,
			CAR_SINGLE_INFO_CELLS
		)

		await this.hstsMvsSerive.update(processId, {
			stage: HstsMvsStage.VALIDATE_CAR_INFO
		})

		const validated =
			await this.carInfoValidator.validate(carInfoParsedData)

		if (
			validated.birthDate.getTime() !== birthDate.getTime() ||
			fullName !== validated.fullName
		) {
			throw new BadRequestException(
				'Дані з файлу не збігаються з водійським посвіченням'
			)
		}

		return validated
	}

	private async processMultiCarInfo(
		processId: string,
		buffer: Buffer,
		fullName: string,
		birthDate: Date
	) {
		const carInfoParsedMultiCustomRowsData =
			await this.carInfoMultiParser.parseCustomList(buffer, [1, 2, 3], 9)

		const carInfoParsedMultiCustomData =
			await this.carInfoMultiParser.parseRowsCol(
				carInfoParsedMultiCustomRowsData
			)

		const carInfoParsedData = this.carInfoMultiTransform.transforMany(
			carInfoParsedMultiCustomData,
			CAR_SINGLE_INFO_CELLS
		)

		await this.hstsMvsSerive.update(processId, {
			stage: HstsMvsStage.VALIDATE_CAR_INFO
		})

		const validated = await this.carInfoValidator.validateMany(
			carInfoParsedData,
			CarInfoData
		)

		const filtered = validated.filter(
			i =>
				i.birthDate.getTime() === birthDate.getTime() &&
				i.fullName === fullName
		)

		if (filtered.length === 0) {
			throw new BadRequestException(
				'Дані з файлу не збігаються з водійським посвіченням'
			)
		}

		return validated
	}
}
