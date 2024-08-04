import { IUserInteractor } from "../../interfaces/userIntractor"
import { inject, injectable } from "inversify"
import { INTERFACE_TYPE } from "../../utils"
import { NextFunction, Request, Response } from "express"


@injectable()
export class UpdateNotifications {
    private interector: IUserInteractor
    constructor(
        @inject(INTERFACE_TYPE.UserIntractor) interector: IUserInteractor
    ) {
        this.interector = interector
    }
    async OnUpdateNot(req: Request, res: Response, next: NextFunction) {
        const { userId } = req.body
        try {
            if (userId) {
                const data = await this.interector.updateNotification(userId)
                res.send({
                    message: 'updated',
                    success: true,
                })
            } else {
                res.send({
                    message: 'UserId required',
                    success: true,
                })
            }
        } catch (error) {
            res.send({
                message: 'Server ......',
                success: false,
                error: error
            })
        }
    }
}