import { Controller, Get, Param } from '@nestjs/common'

@Controller('account')
export class AccountController {
	@Get('avatar/:userId')
	async getUserAvatar(@Param('userId') userId: string) {
		return userId
	}
}
