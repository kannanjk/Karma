import { IChatIntractor } from "../InterFace/IChatIntractor"
import { inject, injectable } from "inversify"
import { CHAT_INTERFACE } from "../utils"
import { NextFunction, Request, Response } from "express"

@injectable()
export class GetUserChat {
    private intractor: IChatIntractor
    constructor(
        @inject(CHAT_INTERFACE.ChatIntractor) intractor: IChatIntractor
    ) {
        this.intractor = intractor
    }
    async OnGetUserChat(req: Request, res: Response, next: NextFunction) {
        const body = req.body
        try {
            if (body) {
                const data = await this.intractor.getUserChat(body)
                if (data) {
                    res.send({
                        message: 'Chat found',
                        success: true,
                        data: data
                    })
                }
            } else {
                res.send({
                    message: 'userId require',
                    success: false,
                })
            }
        } catch (error) {
            res.send({
                message: 'Server Eroor',
                success: false,
                error: error.message
            })
        }
    }
}