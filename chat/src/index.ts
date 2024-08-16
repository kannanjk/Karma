import 'reflect-metadata'
import { ConnectDb } from "./app/Database/Db";
import express from "express";
const dotenv = require('dotenv');
import chat from './Routes/ChatRout'
import { Websocket } from './app/socket/webSocket';
import http from "http";
import { socket } from './Routes/socket';

dotenv.config();  

const app = express();
const httpServer = http.createServer(app);
app.set("trust proxy", true);
const port = process.env.PORT;
app.use(express.json())  

app.use('/api',chat)

export const io = Websocket.getInstance(httpServer)

io.on("connection",socket)

ConnectDb()

httpServer.listen(3006, () => {
  console.log(`Chat Server is running at ${3006}`);
});

app.listen(port, () => {
  console.log(`Chat Server is running at ${port}`);
});
 