import { Request, Response } from 'express'

export interface GqlContext {
	request: Request
	response: Response
}
