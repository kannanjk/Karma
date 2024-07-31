import { IUserInteractor } from "../../interfaces/userIntractor"
import { inject, injectable } from "inversify"
import { INTERFACE_TYPE } from "../../utils"
import { NextFunction, Request, Response } from "express"

@injectable()
export class UnFollwUser {
    private interector: IUserInteractor
    constructor(
        @inject(INTERFACE_TYPE.UserIntractor) interector: IUserInteractor
    ) {
        this.interector = interector
    }
    async OnUnFollw(req: Request, res: Response, next: NextFunction) {
        const { followingId, followerId } = req.body
        try {
            if (followingId && followerId) {
                const data = await this.interector.UnFlowwUser(followingId, followerId)
                res.send({
                    message: 'Unfollw success',
                    success: true,
                })
            } else {
                res.send({
                    message: 'ID require>>>>>>>',
                    success: false,
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