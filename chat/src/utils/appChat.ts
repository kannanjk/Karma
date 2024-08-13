import { GetMessage } from "Controllers/GetMessage";

export const CHAT_INTERFACE = {
    ChatRepositry:Symbol.for("ChatRepositry"),
    ChatIntractor:Symbol.for("ChatIntractor"),
    CreateChat: Symbol.for("CreateChat"),
    GetChat:Symbol.for("GetChat"),
    GetUserChat:Symbol.for("GetUserChat"),
    CreateMessage:Symbol.for("CreateMessage"),
    GetMessage:Symbol.for("GetMessage")
}