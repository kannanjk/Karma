import { User } from "entities/Users";

export interface IUserInteractor {
    createUser(input: any): Promise<User>
    findUser(input: any): Promise<User> 
}