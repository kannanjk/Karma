import { NextFunction, Request, Response } from "express";
import { IUserInteractor } from "../../interfaces/userIntractor";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../../utils";

@injectable() 
export class UpdateUser {
    private interector: IUserInteractor
    constructor(
        @inject(INTERFACE_TYPE.UserIntractor) interector: IUserInteractor
    ) {
        this.interector = interector
    }
    async OnUpdate(req: Request, res: Response, next: NextFunction) {
        const body = req.body                
        console.log(body);
        try {
            const data = await this.interector.updateUser(body)
            
            if (data) {
                res.send({
                    message: "User updated Success",
                    success: true,
                    data: data
                })
            } else {
                res.send({
                    message: "User updated fail",
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