const dotenv = require('dotenv');
import { ConnectDb } from "./app/Db";
import express, { Request, Response } from "express";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Post Server');
});

ConnectDb()

app.listen(port, () => {
  console.log(`Post Server is running at ${port}`);
});
