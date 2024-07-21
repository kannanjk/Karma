import { NextFunction, Request, Response } from "express";
import { IUserInteractor } from "../../interfaces/userIntractor";
import { generateToken } from "../../app/jwt";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../../utils";

@injectable()
export class LoginUser{
    private interector: IUserInteractor
    constructor(
       @inject(INTERFACE_TYPE.UserIntractor) interector: IUserInteractor
    ) {
        this.interector = interector
    }
    async OnLoginUser(req: Request, res: Response, next: NextFunction) {
        const body = req.body
        try {
            const data = await this.interector.findUser(body)
            if (data.email) {
                const token = generateToken(data)
                req.session = {
                    userJwt: token,
                    email: data.email
                }
                return res.send({
                    message: "User login Success!",
                    success: true,
                    token: token,
                    data: data
                })
            } else {
                return res.send({
                    message: "login fail",
                    success: false,
                    data: data
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