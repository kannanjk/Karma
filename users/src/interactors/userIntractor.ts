import { User } from "entities/Users";
import { IUserInteractor } from "../interfaces/userIntractor";
import { IUserRepositry } from "interfaces/IUserRepositry";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils";

@injectable()
export class UserIntractor implements IUserInteractor {
    private repositry: IUserRepositry
    constructor(
       @inject(INTERFACE_TYPE.UserRepositry) repositry: IUserRepositry
    ) { 
        this.repositry = repositry
    }
    createUser(input: any) { 
        return this.repositry.create(input)
    }
    findUser(input: any): Promise<User> {
        return this.repositry.findUser(input)
    }
    updateUser(input: any) {
        return this.repositry.update(input)
    }
    getAllUser() {
        return this.repositry.getAllUser()
    }
    userAccess(id: number, access: boolean) {
        return this.repositry.userAccess(id, access)
    }
    getUserprofile(input: any) {
        return this.repositry.getUserPro(input)
    }
    getUserData(data: any) {        
        return this.repositry.getUserData(data)
    }
    uploadImage(data: any) { 
        return this.repositry.uploadImage(data)
    }
    flowwUser(id: number, flower: number) {
        return this.repositry.follwUser(id,flower)
    }
    UnFlowwUser(id: number, flower: number) {
        return this.repositry.unFollwUser(id,flower)
    }
}