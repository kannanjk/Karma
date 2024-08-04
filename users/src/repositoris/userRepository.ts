import { User } from "../entities/Users";
import { PrismaClient } from '@prisma/client'
import { Password } from "../app/HashPassword";
import { IUserRepositry } from "../interfaces/IUserRepositry";
import { injectable } from "inversify";
import { uploadImageToBucket } from "../app/externelService/awsS3Bucket";
import { fileBuffer } from "../app/externelService/resiseImageSharp";
import { Notification } from "entities/Notification";

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
                following: true,
                notifications: true
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
                followers: true,
                following: true,
                notifications: true
            }
        })
        return user
    }
    async uploadImage(data: any): Promise<any> {
        const fileBuffer_code = await fileBuffer(data.file.data);
        const res = await uploadImageToBucket(fileBuffer_code, data.file.mimetype)
        console.log(res);

        return res
    }
    async follwUser(following: number, follower: number): Promise<any> {
        const user = await this._prisma.follow.findUnique({
            where: {
                followerId_followingId: {
                    followerId: following,
                    followingId: follower,
                },
            },
        })

        if (following === follower) {
            console.log("same user");
        } else {
            if (user) {
                console.log(user);
            } else {
                const creating = await this._prisma.follow.create({
                    data: {
                        followerId: following,
                        followingId: follower
                    }
                })
                if (creating.id) {
                    await this._prisma.notification.create({
                        data: {
                            message: "Someone followed you!",
                            read: true,
                            userId: following
                        }
                    })
                }
            }
        }
        return
    }
    async unFollwUser(follower: number, following: number): Promise<any> {
        const deleting = await this._prisma.follow.deleteMany({
            where: {
                followerId: follower,
                followingId: following
            }
        })
        if (deleting.count == 1) {
            await this._prisma.notification.create({
                data: {
                    message: "Someone Unfollowed you!",
                    read: true,
                    userId: follower
                }
            })
        }
        return deleting
    }
    async GetNotifications(userId: number): Promise<Notification[]> {
        const noti = await this._prisma.notification.findMany({
            where: {
                userId: userId
            },
            orderBy: {
                created_at: 'desc'
            }
        });
        return noti
    }
    async updateNotification(id: number): Promise<null> {

        const result = await this._prisma.notification.updateMany({
            where: {
                userId: id,
                read: true
            },
            data: {
                read: false
            }
        });
        return null
    }
}