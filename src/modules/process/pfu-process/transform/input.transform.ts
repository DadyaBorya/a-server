import { Injectable } from '@nestjs/common'
import { formatDateToDDMMYYYY } from '@shared/utils'

import { PfuStage } from '@/prisma/generated'

import { PfuInput, PfuPayment } from '../interfaces'
import { PfuProcessService } from '../pfu-process.service'

@Injectable()
export class PfuInputTransformHandler {
	constructor(private readonly pfuService: PfuProcessService) {}

	async transform(processId: string, inputData: PfuInput): Promise<PfuInput> {
		await this.pfuService.update(processId, {
			stage: PfuStage.TRANSFORM_INPUT_FILE
		})

		const sortedPayments = [...inputData.payments].sort(
			(a, b) => new Date(a.month).getTime() - new Date(b.month).getTime()
		)

		const groupedByInsurer = sortedPayments.reduce(
			(acc, payment) => {
				if (!acc[payment.insurerName]) {
					acc[payment.insurerName] = []
				}
				acc[payment.insurerName].push(payment)
				return acc
			},
			{} as Record<string, PfuPayment[]>
		)

		const newPayments: PfuPayment[] = []

		Object.entries(groupedByInsurer).forEach(([insurerName, payments]) => {
			const periods = this.findConsecutivePeriods(payments)
			const periodsText = periods
				.map(period => {
					if (period.length === 1) {
						return formatDateToDDMMYYYY(period[0].month)
					} else {
						return `${formatDateToDDMMYYYY(period[0].month)} по ${formatDateToDDMMYYYY(period[period.length - 1].month)}`
					}
				})
				.join(', ')

			newPayments.push({
				month: `з ${periodsText}`,
				insurerCode: payments[0].insurerCode,
				insurerName: this.normalizeQuotes(insurerName)
			})
		})

		return {
			...inputData,
			payments: newPayments
		}
	}

	private findConsecutivePeriods(payments: PfuPayment[]): PfuPayment[][] {
		if (payments.length === 0) return []

		const periods: PfuPayment[][] = []
		let currentPeriod: PfuPayment[] = [payments[0]]

		for (let i = 1; i < payments.length; i++) {
			const currentDate = new Date(payments[i].month)
			const previousDate = new Date(payments[i - 1].month)

			const nextMonth = new Date(previousDate)
			nextMonth.setMonth(nextMonth.getMonth() + 1)

			if (currentDate.getTime() === nextMonth.getTime()) {
				currentPeriod.push(payments[i])
			} else {
				periods.push(currentPeriod)
				currentPeriod = [payments[i]]
			}
		}

		periods.push(currentPeriod)
		return periods
	}

	private normalizeQuotes(text: string): string {
		const normalized = text.replace(/[«»""]/g, '"')

		let result = ''
		const quoteStack: string[] = []

		for (let i = 0; i < normalized.length; i++) {
			const char = normalized[i]

			if (char === '"') {
				if (quoteStack.length === 0) {
					result += '«'
					quoteStack.push('«')
				} else if (quoteStack.length === 1) {
					const nextQuoteIndex = normalized.indexOf('"', i + 1)

					if (nextQuoteIndex !== -1) {
						result += '«'
						quoteStack.push('«')
					} else {
						result += '»'
						quoteStack.pop()
					}
				} else {
					result += '»'
					quoteStack.pop()
				}
			} else {
				result += char
			}
		}

		return result
	}
}
