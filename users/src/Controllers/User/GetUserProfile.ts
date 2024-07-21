import { inject, injectable } from "inversify"
import { IUserInteractor } from "../../interfaces/userIntractor"
import { INTERFACE_TYPE } from "../../utils"
import { NextFunction, Request, Response } from "express"
import { verifyUserToken } from "../../app/jwt"

@injectable()
export class GetUserProfile {
    private interector: IUserInteractor
    constructor(
        @inject(INTERFACE_TYPE.UserIntractor) interector: IUserInteractor
    ) {
        this.interector = interector
    }
    async OnGetProfile(req: Request, res: Response, next: NextFunction) {
        const body = req.body
        const user = verifyUserToken(body.token)        
        try {
            const data = await this.interector.getUserprofile(user)
            if (data) {
                res.send({
                    message: "User found",
                    success: true,
                    data: data
                })
            } else {
                res.send({
                    message: "User found fail",
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