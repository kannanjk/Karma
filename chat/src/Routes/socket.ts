import { io } from "../index"
import { Socket } from "socket.io"
import { TypingController } from "../Controllers/socket/TypingContoller";

let activeUsers: any[] = []

export const socket = (socket: Socket) => {
    const typingController = new TypingController(socket);

    socket.on("user-joined", (userId) => {
        if (userId) {
            if (!activeUsers.some((user) => user.userId === userId)) {
                activeUsers.push({ userId: userId, socketId: socket.id })
            }
        }
        io.emit('get-users', activeUsers)
    })
    socket.on("disconnect", () => {
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id)
        io.emit("get-users", activeUsers)
    })
    socket.on('typing-started-client', typingController.typinStarted)
    socket.on('typing-stopped-client',typingController.typingStoped)
}