import { PfuPayment } from './payment.interface'

export interface PfuDocxData {
	fullName: string
	isMale: boolean
	hasPayments: boolean
	payments: PfuPayment[]
}
