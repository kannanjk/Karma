import { User } from "../entities/Users";
import { PrismaClient } from '@prisma/client'
import { IUserRepositry } from "interfaces/IUserRepositry";
import { injectable } from "inversify";

@injectable()
export class UserRepositry implements IUserRepositry {
    _prisma: PrismaClient
    constructor() {
        this._prisma = new PrismaClient()
    }
    async create({ name, email, password }: User): Promise<any> {
        const check = await this._prisma.user.findUnique({
            where: {
                email: email,
            },
        })
        if (check) {
            return "user Already exist"
        } else {
            const user = await this._prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    password: password,
                },
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
    async update(data: User): Promise<User> {
        const updated = await this._prisma.user.update({
            where: {
                email: data.email,
            },
            data: {
                name: data.name,
                password: data.password
            },
        })
        return updated
    }
    async getAllUser(): Promise<User[]> {
        const users = await this._prisma.user.findMany()
        return users
    }
    async userAccess(input:number,access:boolean): Promise<any> {
        const user = await this._prisma.user.update({
            where: {
                id: input
            },
            data: {
                access: access
            }
        })        
        return user
    }

}