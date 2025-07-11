import { AccountService } from '@modules/users/account'
import { Injectable } from '@nestjs/common'
import { randomBytes } from 'crypto'
import { encode } from 'hi-base32'
import * as QRCode from 'qrcode'

import { User } from '@/prisma/generated'
import { createTotp, validateTotp } from '@/src/shared/utils'

import { TotpAlreadyEnabledException } from './exceptions'
import { EnableTotpInput } from './inputs'

@Injectable()
export class TotpService {
	constructor(private readonly accountService: AccountService) {}

	async generate(user: User) {
		if (user.isTotpEnabled) {
			throw new TotpAlreadyEnabledException()
		}

		const secret = encode(randomBytes(15))
			.replace(/=/g, '')
			.substring(0, 14)

		const totp = createTotp(user.username, secret)

		const otpauthUrl = totp.toString()
		const qrcodeUrl = await QRCode.toDataURL(otpauthUrl)

		return {
			qrcodeUrl,
			secret
		}
	}

	async enable(user: User, input: EnableTotpInput) {
		if (user.isTotpEnabled) {
			throw new TotpAlreadyEnabledException()
		}

		const { secret, pin } = input

		const totp = createTotp(user.username, secret)

		validateTotp(totp, pin)

		await this.accountService.update(user.id, {
			isTotpEnabled: true,
			totpSecret: secret
		})

		return true
	}

	async disable(userId: string) {
		await this.accountService.findById(userId)

		await this.accountService.update(userId, {
			isTotpEnabled: false,
			totpSecret: null
		})

		return true
	}
}
