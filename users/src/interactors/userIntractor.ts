import { User } from "entities/Users";
import { IUserInteractor } from "../interfaces/userIntractor";
import { UserRepositry } from "repositoris/userRepository";
import { IUserRepositry } from "interfaces/IUserRepositry";

export class UserIntractor implements IUserInteractor {
    private repositry: IUserRepositry 
    constructor(repositry: IUserRepositry) {
        this.repositry = repositry
    }
    async createUser(input: any) {
        return this.repositry.create(input)
    }
    findUser(input: any): Promise<User> {
        return this.repositry.findUser(input)
    }
    updateUser(input: any) {
        return this.repositry.update(input)
    }
}