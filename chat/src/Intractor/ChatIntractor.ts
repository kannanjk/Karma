import { IChatRepositry } from "../InterFace/IChatRepositry";
import { IChatIntractor } from "../InterFace/IChatIntractor";
import { inject, injectable } from "inversify";
import { CHAT_INTERFACE } from "../utils";

@injectable()
export class ChatIntractor implements IChatIntractor {
    private repositry: IChatRepositry
    constructor(
        @inject(CHAT_INTERFACE.ChatRepositry) repositry: IChatRepositry
    ) {
        this.repositry = repositry
    }
    createChat(input: any) {
        return this.repositry.CreateChat(input)
    }
    GetChat(input: any) {
       return this.repositry.getChat(input)
    }
    getUserChat(input: any) {
        return this.repositry.GetUserChat(input)
    }
    createMessage(input: any) {
        return this.repositry.createMessage(input)
    }
    getMessage(input: any) {
        return this.repositry.getMessage(input)
    }
}