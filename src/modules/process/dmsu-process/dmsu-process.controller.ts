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

import { DownloadDmsuProcessGuard } from './guards'

@Controller('process/dmsu')
export class DmsuProcessController {
	constructor(private readonly storageService: StorageService) {}

	@UseGuards(AuthGuard, DownloadDmsuProcessGuard)
	@Get('download/:id')
	async downloadFile(
		@Param('id', ParseUUIDPipe) id: string,
		@Res() res: Response
	) {
		this.storageService.downloadFile(id, res)
	}
}
