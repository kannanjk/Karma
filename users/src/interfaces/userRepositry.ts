import { User } from "entities/Users";

export interface IUserrepositry {
    create(data: User): Promise<User> 
    findUser(data: User): Promise<User> 
}  