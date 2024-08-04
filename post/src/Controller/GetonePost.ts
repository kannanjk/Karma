import { IPostItractor } from "../interface/IPostIntractor"
import { inject, injectable } from "inversify"
import { POST_INTERFACE } from "../utils"
import { NextFunction, Request, Response } from "express"

@injectable()
export class GetAPost {
    private intractor: IPostItractor
    constructor(
        @inject(POST_INTERFACE.PostIntractor) intractor: IPostItractor
    ) {
        this.intractor = intractor
    }
    async OnGetonePost(req: Request, res: Response, next: NextFunction) {
        const body = req.body
        try {
            const data = await this.intractor.getOnePost(body)
            if (data) {
                res.send({
                    message: 'Post found',
                    success: true,
                    data: data
                })
            }
        } catch (error) {
            res.send({
                message: 'Server Eroor',
                success: false,
                error: error
            })
        }
    }
}