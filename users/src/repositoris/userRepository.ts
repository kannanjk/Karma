import { IUserInteractor } from "interfaces/userIntractor";
import { User } from "../entities/Users";
// import { IUserRepositry } from "../interfaces/userRepositry";
import { PrismaClient } from '@prisma/client' 
import { IUserRepositry } from "interfaces/IUserRepositry";

export class UserRepositry implements IUserRepositry {
    _prisma: PrismaClient
    constructor() {
        this._prisma = new PrismaClient()
    }   
    find(data: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async create(data: User): Promise<any> {
        const check = await this._prisma.user.findUnique({
            where: {
                email: data.email, 
            },
        })
        if (check) {
            return "user Already exist"
        } else {
            const user = await this._prisma.user.create({
                data,
            })
            return user
        } 
    }
    async findUser(data: User): Promise<any> {
        const check = await this._prisma.user.findUnique({
            where: {
                email: data.email,
            },
        })
        if (check) {
            return check
        } else {
            return 'User Not Found'
        }
    }
      update(input: any): Promise<User> {
        throw new Error("Method not implemented.");
    }
   
}