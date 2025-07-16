export interface HstsMvsDocxData {
	driverLicenceSeries: string
	driverLicenceNumber: string
	driverLicenceIssueDate: string
	driverLicenceExpirationDate: string
	driverLicenceIssuedBy: string
	driverLicenceCategories: string
	fullName: string
	registrationPlace: string
	cars: CarDocxData[]
}

export interface CarDocxData {
	plateNumber: string
	vendor: string
	year: string
	registrationDate: string
	bodyNumber: string
	transfer: string
	color: string
	isFirst: boolean
}
