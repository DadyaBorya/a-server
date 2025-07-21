export interface DmsuDocxData {
	isMale: boolean
	genitiveFullname: string
	translitFullName: string
	birthDate: string
	birthPlace: string
	registrationPlace: string
	taxId: string
	phone: string
	hasPassports: boolean
	hasForeignPassports: boolean
	hasMoreThanOnePassport: boolean
	hasMoreThanOneForeignPassport: boolean
	passports: DmsuDocumentDocxData[]
	foreignPassports: DmsuDocumentDocxData[]
	imageYear: number
	image: string
	isTaxId: boolean
	isPhone: boolean
}

export interface DmsuDocumentDocxData {
	number: string
	issuedAt: string
	expiresAt: string
	status: string
	statusBool: boolean
	issuer: string
	isLast: boolean
}
