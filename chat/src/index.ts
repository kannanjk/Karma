import 'reflect-metadata'
import { ConnectDb } from "./app/Database/Db";
import express from "express";
const dotenv = require('dotenv');
import chat from './Routes/ChatRout'

dotenv.config();  

const app = express();
const port = process.env.PORT;
app.use(express.json())  

app.use('/api',chat)

ConnectDb()

app.listen(port, () => {
  console.log(`Chat Server is running at ${port}`);
});
 