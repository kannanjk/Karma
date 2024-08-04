import { IPostItractor } from "../interface/IPostIntractor"
import { inject, injectable } from "inversify"
import { POST_INTERFACE } from "../utils"
import { NextFunction, Request, Response } from "express"

@injectable()
export class GetComment {
    private intractor: IPostItractor
    constructor(
        @inject(POST_INTERFACE.PostIntractor) intractor: IPostItractor
    ) {
        this.intractor = intractor
    } 
    async OnGetComment(req: Request, res: Response, next: NextFunction) {
        const body = req.body
        try { 
            if (body) {
                const data = await this.intractor.getComment(body)
                if (data) {
                    res.send({
                        message: 'comment found',
                        success: true,
                        data: data
                    })
                }
            }else{
                res.send({
                    message: 'somthing went error',
                    success: true,
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