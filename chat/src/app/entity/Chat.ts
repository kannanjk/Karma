interface ChatData {
    member: []
}

export class Chat {
    member?:number []
    constructor({ member }: ChatData) {
        this.member = member
    }
}