import 'reflect-metadata'
import { ConnectDb } from "./app/Database/Db";
import express from "express";
import productRoute from './Routes/Post'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json()) 
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());

app.use('/api',productRoute)

ConnectDb()

app.listen(port, () => {
  console.log(`Post Server is running at ${port}`);
});
