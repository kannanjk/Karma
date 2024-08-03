import { IUserInteractor } from "../../interfaces/userIntractor"
import { inject, injectable } from "inversify"
import { INTERFACE_TYPE } from "../../utils"
import { NextFunction, Request, Response } from "express"

@injectable()
export class FollwUser {
    private interector: IUserInteractor
    constructor(
        @inject(INTERFACE_TYPE.UserIntractor) interector: IUserInteractor
    ) {
        this.interector = interector
    }
    async OnFollwUser(req: Request, res: Response, next: NextFunction) {
        const { followingId, followerId } = req.body
        
        try {
            const data = await this.interector.flowwUser(followingId, followerId)  
            res.send({
                message: 'Follw has been sent!',
                success: true,
                data: data
            })
        } catch (error) {
            res.send({
                message: 'Server ......',
                success: false,
                error: error
            })
        }
    }


}