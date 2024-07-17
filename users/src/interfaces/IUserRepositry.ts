 import  {User} from '../entities/Users'

 export interface IUserRepositry{
    findUser(input: User): Promise<User>
    create(data:User):Promise<User>
    update(data:User):Promise<User>
 }