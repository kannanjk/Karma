import { IChatIntractor } from "../InterFace/IChatIntractor"
import { inject, injectable } from "inversify"
import { CHAT_INTERFACE } from "../utils/appChat"
import { Response, Request, NextFunction } from 'express'

@injectable() 
export class CreateChat { 
    private intractor: IChatIntractor
    constructor(
        @inject(CHAT_INTERFACE.ChatIntractor) intractor: IChatIntractor
    ) {
        this.intractor = intractor
    }
    async OnCreateChat(req: Request, res: Response, next: NextFunction) {
        const body = req.body
        try {
            if (body) {
                const data = await this.intractor.createChat(body)
                if (data) {
                    res.send({
                        message: 'Chat created',
                        success: true,
                        data: data
                    })
                }else{
                    res.send({
                        message: 'somthing went wrong',
                        success: false,
                    })
                }
            }else{
                res.send({
                    message: 'userId,senterId require',
                    success: false,
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