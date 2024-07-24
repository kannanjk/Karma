import { inject, injectable } from "inversify"
import { IUserInteractor } from "../../interfaces/userIntractor"
import { INTERFACE_TYPE } from "../../utils"
import { NextFunction, Request, Response } from "express"

@injectable()
export class GetUserData {
    private interector: IUserInteractor
    constructor(
        @inject(INTERFACE_TYPE.UserIntractor) interector: IUserInteractor
    ) {
        this.interector = interector
    }
    async OnGetUserData(req: Request, res: Response, next: NextFunction) {
        const { id } = req.body        
        try {
            const data = await this.interector.getUserData(id)
            
            if (data.email) {
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
                message: 'Server myru',
                success: false,
                error: error
            })
        }
    }
}