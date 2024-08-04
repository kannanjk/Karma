export class Notification {
    constructor(
        public readonly id?: number,
        public readonly message?: string,
        public readonly read?: boolean,
        public readonly userId?: number,
        public readonly created_at?: Date
    ) { }
}