export class User {
    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly access: boolean,
        public readonly password: string,
        public readonly bio?: string,
        public readonly followers?: {
            followerId: number;
        }[],
        public readonly following?: {
            followingId: number;
        }[],
        public readonly profileImage?: string,
        public readonly coverImage?: string,
        public readonly created_at?: Date,
    ) { }
}