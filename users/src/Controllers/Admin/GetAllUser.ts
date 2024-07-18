import { NextFunction, Request, Response } from "express";
import { IUserInteractor } from "../../interfaces/userIntractor";
import { inject, injectable } from "inversify";
import { ADMIN_TYPE } from "../../utils";

@injectable()
export class GetAllUsers {
    private interector: IUserInteractor
    constructor(
       @inject(ADMIN_TYPE.UserIntractor) interector: IUserInteractor
    ) {
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
                    message: "data fetch fail",
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