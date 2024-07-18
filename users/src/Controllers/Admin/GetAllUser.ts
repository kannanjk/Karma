import { NextFunction, Request, Response } from "express";
import { IUserInteractor } from "../../interfaces/userIntractor";

export class GetAllUsers {
    private interector: IUserInteractor
    constructor(interector: IUserInteractor) {
        this.interector = interector
    }
    async OnGetAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.interector.getAllUser()
            if (users) {
                res.send({
                    message: "Users Found",
                    success: true,
                    data: users
                })
            } else {
                res.send({
                    message: "signup fail",
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