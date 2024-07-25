export class User {
    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly access: boolean,
        public readonly password: string,
        public readonly image?: string,
        public readonly created_at?: Date,
    ) { }
}