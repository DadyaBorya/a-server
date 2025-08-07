import { OllamaService } from '@modules/libs/ollama'
import { Injectable } from '@nestjs/common'

import { PfuStage } from '@/prisma/generated'
import { normalizeLetters } from '@/src/shared/utils'

import { NORMALIZE_INSURER_NAME_PROMPT } from '../constants'
import { PfuDocxData, PfuInput } from '../interfaces'
import { PfuProcessService } from '../pfu-process.service'

@Injectable()
export class PfuModifierHandler {
	constructor(
		private readonly pfuService: PfuProcessService,
		private readonly ollama: OllamaService
	) {}

	async modify(
		processId: string,
		inputData: PfuInput,
		isAi: boolean
	): Promise<PfuDocxData> {
		await this.pfuService.update(processId, {
			stage: PfuStage.MODIFY_DATA
		})

		if (inputData.payments.length > 0) {
			inputData.payments.forEach(p => (p.isLast = false))
			inputData.payments[inputData.payments.length - 1].isLast = true
		}

		return {
			fullName: this.normalizeFullName(inputData),
			isMale: this.getIsMale(inputData),
			hasPayments: inputData.payments.length > 0,
			payments: await this.normalizePayments(inputData, processId, isAi)
		}
	}

	private async normalizePayments(
		inputData: PfuInput,
		processId: string,
		isAi: boolean
	) {
		if (!isAi) {
			const shortFormsMap: Record<string, string> = {
				'товариство з обмеженою відповідальністю': 'ТОВ',
				'приватне підприємство': 'ПП',
				'фізична особа-підприємець': 'ФОП',
				'державне підприємство': 'ДП',
				'акціонерне товариство': 'АТ',
				'публічне акціонерне товариство': 'ПАТ',
				'закрите акціонерне товариство': 'ЗАТ',
				'командитне товариство': 'КТ',
				'повне товариство': 'ПТ',
				'обслуговуючий кооператив': 'ОК',
				"об'єднання співвласників багатоквартирного будинку": 'ОСББ'
			}

			const pattern = Object.keys(shortFormsMap).join('|')
			const fullFormRegex = new RegExp(pattern, 'gi')

			const normalizedPayments = inputData.payments.map(payment => {
				const normalizedName = normalizeLetters(
					payment.insurerName.toLowerCase()
				)

				const finalName = normalizedName.replace(
					fullFormRegex,
					match => {
						const normalizedMatch = normalizeLetters(
							match.toLowerCase()
						)
						return shortFormsMap[normalizedMatch] || match
					}
				)

				return {
					...payment,
					insurerName: finalName.toUpperCase()
				}
			})

			return normalizedPayments
		} else {
			await this.pfuService.update(processId, {
				stage: PfuStage.NORMALIZE_INSURE_NAME
			})
			const newPayments = []

			for (const payment of inputData.payments) {
				const newIssuer = await this.ollama.execute(
					NORMALIZE_INSURER_NAME_PROMPT.build(payment.insurerName)
				)

				newPayments.push({
					...payment,
					isInsurerPerson: payment.insurerCode.length === 10,
					insurerName: newIssuer
				})
			}

			return newPayments
		}
	}

	private getIsMale(inputData: PfuInput) {
		const { taxId } = inputData

		const num = Number(taxId[8])

		if (num % 2 === 0 || num === 0) {
			return false
		}

		return true
	}

	private normalizeFullName(inputData: PfuInput) {
		const { lastName, firstName, patronymic } = inputData

		return `${lastName} ${firstName[0]}.${patronymic[0]}.`
	}
}
