import { OllamaService } from '@modules/libs/ollama'
import { Injectable } from '@nestjs/common'
import {
	cleanText,
	formatDateToDDMMYYYY,
	getShortenedFullName,
	parseFullName
} from '@shared/utils'

import { HstsMvsStage } from '@/prisma/generated'

import {
	NORMALIZE_ADDRESS_PROMPT,
	NORMALIZE_ISSUED_BY_PROMPT
} from '../constants'
import { HstsMvsProcessService } from '../hsts-mvs-process.service'
import { CarInfoData, DriverLicenceData, HstsMvsDocxData } from '../interfaces'
import {
	normalizeCarColor,
	normalizeCarPlateNumber,
	normalizeDriverLicenceIssuedBy,
	normalizeRegistrationPlace,
	normalizeTransfer
} from '../utils'

@Injectable()
export class HstsMvsProcessModifier {
	constructor(
		private readonly hstsMvsService: HstsMvsProcessService,
		private readonly ollama: OllamaService
	) {}

	async modify(
		processId: string,
		carInfoData: CarInfoData | CarInfoData[],
		isAi: boolean,
		driverLicenceData?: DriverLicenceData
	): Promise<HstsMvsDocxData> {
		await this.hstsMvsService.update(processId, {
			stage: HstsMvsStage.MODIFY_DATA
		})

		const normalizedCars = Array.isArray(carInfoData)
			? carInfoData
			: [carInfoData]

		const driverData = driverLicenceData
			? await this.mapDriverLicenceData(
					driverLicenceData,
					isAi,
					processId
				)
			: { hasDriverLicence: false }

		return {
			...driverData,
			fullName: getShortenedFullName(
				parseFullName(normalizedCars[0].fullName)
			),
			registrationPlace: await this.normalizeAddress(
				normalizedCars[0].registrationPlace,
				isAi,
				processId
			),
			cars: this.mapCarsData(normalizedCars),
			hasMoreThanOneCar: normalizeCarColor.length > 1
		}
	}

	private async mapDriverLicenceData(
		driverLicenceData: DriverLicenceData,
		isAi: boolean,
		processId: string
	) {
		return {
			hasDriverLicence: true,
			driverLicenceSeries: driverLicenceData.series,
			driverLicenceNumber: driverLicenceData.number,
			driverLicenceIssueDate: formatDateToDDMMYYYY(
				driverLicenceData.issueDate
			),
			driverLicenceExpirationDate: formatDateToDDMMYYYY(
				driverLicenceData.expirationDate
			),
			driverLicenceIssuedBy: await this.normalizeIssuedBy(
				driverLicenceData.issuedBy,
				isAi,
				processId
			),
			driverLicenceCategories: driverLicenceData.categories
		}
	}

	private mapCarsData(carInfoData: CarInfoData[]) {
		return carInfoData.map((car, index) => ({
			plateNumber: normalizeCarPlateNumber(car.plateNumber),
			vendor: car.vendor,
			year: car.year,
			registrationDate: formatDateToDDMMYYYY(car.registrationDate),
			bodyNumber: car.bodyNumber,
			transfer: normalizeTransfer(car.transfer),
			color: normalizeCarColor(car.color),
			isFirst: index === 0
		}))
	}

	private async normalizeAddress(
		address: string,
		isAi: boolean,
		processId: string
	) {
		if (isAi) {
			await this.hstsMvsService.update(processId, {
				stage: HstsMvsStage.NORMALIZE_REGISTRATION_PLACE
			})
			const promt = `${NORMALIZE_ADDRESS_PROMPT}\n\n${address}\nВихід:`

			const result = await this.ollama.execute(promt)

			return cleanText(result)
		}

		return normalizeRegistrationPlace(address)
	}

	private async normalizeIssuedBy(
		issuedBy: string,
		isAi: boolean,
		processId: string
	) {
		if (isAi) {
			await this.hstsMvsService.update(processId, {
				stage: HstsMvsStage.NORMALIZE_DRIVER_LICENCE_ISSUED_BY
			})
			const promt = `${NORMALIZE_ISSUED_BY_PROMPT}${issuedBy}`

			const result = await this.ollama.execute(promt)

			return cleanText(result)
		}

		return normalizeDriverLicenceIssuedBy(issuedBy)
	}
}
