
export interface IUserInteractor {
    createUser(input: any): any
    findUser(input: any): any
    updateUser(input: any): any
    getAllUser():any
    userAccess(id:any,access:boolean):any
    getUserprofile(data: any): any
    getUserData(data:any):any
    uploadImage(data:any):any
}  