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

import { DownloadErdProcessGuard } from './guards'

@Controller('process/erd')
export class ErdProcessController {
	constructor(private readonly storageService: StorageService) {}

	@UseGuards(AuthGuard, DownloadErdProcessGuard)
	@Get('download/:id')
	async downloadFile(
		@Param('id', ParseUUIDPipe) id: string,
		@Res() res: Response
	) {
		this.storageService.downloadFile(id, res)
	}
}
