import { NextFunction, Request, Response } from "express";
import { IUserInteractor } from "../../interfaces/userIntractor";

export class UserAccess {
    private interector: IUserInteractor    
    constructor(interector: IUserInteractor) {
        this.interector = interector
    }
    async OnUserAccess(req: Request, res: Response, next: NextFunction) {
        const {id,access} = req.body
        const user = await this.interector.userAccess(id,access)
        try {
            if (user) {
                res.send({
                    message: "Users Updated",
                    success: true,
                    data: user
                })
            } else {
                res.send({
                    message: "user update fail",
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