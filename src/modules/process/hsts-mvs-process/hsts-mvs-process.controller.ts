import { StorageService } from '@modules/libs/storage'
import {
	Controller,
	Get,
	Param,
	ParseUUIDPipe,
	Res,
	UseGuards
} from '@nestjs/common'
import { AuthGuard } from '@shared/guards'
import { Response } from 'express'

import { DownloadHstsMvsProcessGuard } from './guards'

@Controller('process/hsts-mvs')
export class HstsMvsProcessController {
	constructor(private readonly storageService: StorageService) {}

	@UseGuards(AuthGuard, DownloadHstsMvsProcessGuard)
	@Get('download/:id')
	async downloadFile(
		@Param('id', ParseUUIDPipe) id: string,
		@Res() res: Response
	) {
		return this.storageService.downloadFile(id, res)
	}
}
