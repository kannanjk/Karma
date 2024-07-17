import { NextFunction, Request, Response } from "express";
import { IUserInteractor } from "../interfaces/userIntractor";
import { generateToken } from "../app/jwt";

export class UserController {
    private interector: IUserInteractor
    constructor(interector: IUserInteractor) {
        this.interector = interector
    }
    async OnCreateUser(req: Request, res: Response, next: NextFunction) {
        const body = req.body
        try {
            const data = await this.interector.createUser(body)
            if (data.email) {
                const token = generateToken(data)
                req.session = {
                    userJwt: token,
                    email: data.email
                }
                return res.send({
                    message: "User created Success!",
                    success: true,
                    token: token,
                    data: data
                })
            } else {
                return res.send({
                    message: "signup fail",
                    success: true,
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
                    token:token,
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