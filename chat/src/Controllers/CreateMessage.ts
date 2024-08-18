import { NextFunction, Request, Response } from "express"
import { IChatIntractor } from "../InterFace/IChatIntractor"
import { inject, injectable } from "inversify"
import { CHAT_INTERFACE } from "../utils"
import { Socket } from "socket.io"


@injectable()
export class CreateMessage {
    private intractor: IChatIntractor
    constructor(
        @inject(CHAT_INTERFACE.ChatIntractor) intractor: IChatIntractor,
    ) {
        this.intractor = intractor
    }

    async OnCreateMessage(message: any) {

        try {
            if (message?.body.receverId && message?.body.message) {

                const data = await this.intractor.createMessage(message?.body)
                if (data) {

                    return data
                } else {
                    return {
                        message: 'somthing went wrong',
                        success: false,
                    }
                }
            } else {
                return {
                    message: 'userId,senterId require',
                    success: false,
                }
            }
        } catch (error) {
            return {
                message: 'Server Eroor',
                success: false,
                error: error
            }
        }
    }
}