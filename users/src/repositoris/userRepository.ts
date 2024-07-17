import { User } from "../entities/Users";
import { IUserrepositry } from "../interfaces/userRepositry";
import { PrismaClient } from '@prisma/client' 

export class IUserRepositry implements IUserrepositry {
    _prisma: PrismaClient
    constructor() {
        this._prisma = new PrismaClient()
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
}