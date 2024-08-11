import { IChatIntractor } from "../InterFace/IChatIntractor"
import { inject, injectable } from "inversify"
import { CHAT_INTERFACE } from "../utils"
import { NextFunction, Request, Response } from "express"

@injectable()
export class GetChat {
    private intractor: IChatIntractor
    constructor(
        @inject(CHAT_INTERFACE.ChatIntractor) intractor: IChatIntractor
    ) {
        this.intractor = intractor
    }
    async OnGetChat(req: Request, res: Response, next: NextFunction) {
        const body = req.body
        try {
            if (body) {
                const data = await this.intractor.GetChat(body)
                if (data) {
                    res.send({
                        message: 'Chat found',
                        success: true,
                        data: data
                    })
                } else {
                    res.send({
                        message: 'somthing went wrong',
                        success: false,
                    })
                }
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