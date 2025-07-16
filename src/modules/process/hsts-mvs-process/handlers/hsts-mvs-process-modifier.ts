import { Injectable } from '@nestjs/common'
import { formatDateToDDMMYYYY, getShortenedFullName } from '@shared/utils'

import { HstsMvsStage } from '@/prisma/generated'

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
	constructor(private readonly hstsMvsService: HstsMvsProcessService) {}

	async modify(
		processId: string,
		driverLicenceData: DriverLicenceData,
		carInfoData: CarInfoData | CarInfoData[]
	): Promise<HstsMvsDocxData> {
		await this.hstsMvsService.update(processId, {
			stage: HstsMvsStage.MODIFY_DATA
		})

		const normalizedCars = Array.isArray(carInfoData)
			? carInfoData
			: [carInfoData]

		return {
			...this.mapDriverLicenceData(driverLicenceData),
			fullName: getShortenedFullName(driverLicenceData),
			cars: this.mapCarsData(normalizedCars)
		}
	}

	private mapDriverLicenceData(driverLicenceData: DriverLicenceData) {
		return {
			driverLicenceSeries: driverLicenceData.series,
			driverLicenceNumber: driverLicenceData.number,
			driverLicenceIssueDate: formatDateToDDMMYYYY(
				driverLicenceData.issueDate
			),
			driverLicenceExpirationDate: formatDateToDDMMYYYY(
				driverLicenceData.expirationDate
			),
			driverLicenceIssuedBy: normalizeDriverLicenceIssuedBy(
				driverLicenceData.issuedBy
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
			registrationPlace: normalizeRegistrationPlace(
				car.registrationPlace
			),
			isFirst: index === 0
		}))
	}
}
