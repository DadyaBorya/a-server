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

import { DownloadPfuProcessGuard } from './guards'

@Controller('process/pfu')
export class PfuProcessController {
	constructor(private readonly storageService: StorageService) {}

	@UseGuards(AuthGuard, DownloadPfuProcessGuard)
	@Get('download/:id')
	async downloadFile(
		@Param('id', ParseUUIDPipe) id: string,
		@Res() res: Response
	) {
		this.storageService.downloadFile(id, res)
	}
}
