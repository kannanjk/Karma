export class User {
    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly role: string,
        public readonly password: string,
    ) { }
}