import 'reflect-metadata'
import { ConnectDb } from "./app/Database/Db";
import express from "express";
import productRoute from './Routes/Post'
import comments from './Routes/Comments'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json()) 

app.use('/api',productRoute)
app.use('/comment',comments)

ConnectDb()

app.listen(port, () => {
  console.log(`Post Server is running at ${port}`);
});
