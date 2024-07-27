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

    async create({ name, email, password }: User): Promise<User> {
        const check = await this._prisma.user.findUnique({
            where: {
                email: email,
            },
        })
        if (check) {
            return
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
    async findUser(data: User): Promise<User> {
        const check = await this._prisma.user.findUnique({
            where: {
                email: data.email
            },
        })
        if (check) {
            const comparePass = await Password.compare(
                check.password, data.password
            )
            if (comparePass) {
                return check
            } else {
                return
            }
        } else {
            return
        }
    }
    async update(data: User): Promise<User> {
        const updated = await this._prisma.user.update({
            where: {
                email: data.email,
            },
            data: {
                name: data.name,
                bio: data.bio,
                profileImage: data.profileImage,
                coverImage: data.coverImage
            },
        })
        return updated
    }
    async getAllUser(): Promise<User[]> {
        const users = await this._prisma.user.findMany()
        return users
    }
    async userAccess(input: number, access: boolean): Promise<User> {
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
        const user = await this._prisma.user.findUnique({
            where: {
                email: data.id.email,
            },
            include: {
                followers: true,
                following: true
            },
        })
        return user
    }
    async getUserData(data: number): Promise<User> {        
        const user = await this._prisma.user.findFirst({
            where: {
                id: data,
            },
            include: {
                followers: {
                    select: { followerId: true }
                },
                following: {
                    select: { followingId: true }
                },
            }
        })        
        return user
    }
}