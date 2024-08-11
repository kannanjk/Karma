import { IPostItractor } from "../interface/IPostIntractor"
import { inject, injectable } from "inversify"
import { POST_INTERFACE } from "../utils"
import { NextFunction, Request, Response } from "express"

@injectable()
export class CreateComment {
    private intractor: IPostItractor
    constructor(
        @inject(POST_INTERFACE.PostIntractor) intractor: IPostItractor
    ) {
        this.intractor = intractor
    } 
    async OnCommetnt(req: Request, res: Response, next: NextFunction) {
        const body = req.body
        
        try {
            if (body.postId && body.userId, body.content) {
                const data = await this.intractor.createComment(body)
                if (data) {
                    res.send({
                        message: 'comment created',
                        success: true,
                        data: data
                    })
                }
            } else {
                res.send({
                    message: 'Auth error',
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