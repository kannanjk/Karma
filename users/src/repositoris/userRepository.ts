import { User } from "../entities/Users";
import { PrismaClient } from '@prisma/client'
import { Password } from "../app/HashPassword";
import { IUserRepositry } from "../interfaces/IUserRepositry";
import { injectable } from "inversify";

@injectable()
export class UserRepositry implements IUserRepositry {
    _prisma: PrismaClient
    constructor() {
        this._prisma = new PrismaClient()
    }
    async create({ name, email, password, image }: User): Promise<any> {
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
                    image: image
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
            const comparePass = await Password.compare(
                check.password, data.password
            )            
            if (comparePass) {
                return check
            }else{
                return 'Passwor incorrect'
            }
        } else {
            return 'User Not Found'
        }
    }
    async update(data: User): Promise<User> {
        console.log(data);

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
        return
    }
    async userAccess(input: number, access: boolean): Promise<any> {
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
    async getUserPro(data: any): Promise<User> {
        console.log(data.id.email);

        const user = await this._prisma.user.findUnique({
            where: {
                email: data.id.email,
            },
        })
        return user
    }

}