const dotenv = require('dotenv');
import express, { Request, Response } from "express";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`timeline Server is running at ${port}`);
});
