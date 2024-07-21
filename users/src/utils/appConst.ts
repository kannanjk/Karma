export const INTERFACE_TYPE = {
    UserRepositry: Symbol.for('UserRepositry'),
    UserIntractor: Symbol.for("UserIntractor"),
    CreaterUser: Symbol.for("CreaterUser"),
    LoginUser: Symbol.for('LoginUser'),
    UpdateUser: Symbol.for('UpdateUser'),
    GetUserProfile: Symbol.for('GetUserProfile'),
}

export const ADMIN_TYPE = {
    UserRepositry: Symbol.for('UserRepositry'),
    UserIntractor: Symbol.for("UserIntractor"),
    GetAllUsers: Symbol.for('GetAllUsers'),
    UserAccess: Symbol.for('UserAccess')
}