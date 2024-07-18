
export interface IUserInteractor {
    createUser(input: any): any
    findUser(input: any): any
    updateUser(input: any): any
    getAllUser():any
    userAccess(id:any,access:boolean):any
}  