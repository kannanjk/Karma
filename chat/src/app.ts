import express from "express";
import chat from './Routes/ChatRout'
import { Websocket } from './app/socket/webSocket';
import { json } from "body-parser";
import http from "http";
import { socket } from './Routes/socket';

const app = express();
const httpServer = http.createServer(app);

app.set("trust proxy", true);
app.use(express.json())
app.use(json());  

// app.use('/api',chat)

export const io = Websocket.getInstance(httpServer)

io.on("connection",socket)

export {httpServer,app}