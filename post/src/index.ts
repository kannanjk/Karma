const dotenv = require('dotenv');
import express, { Request, Response } from "express";


dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Post Server');
});

app.listen(port, () => {
  console.log(`Post Server is running at ${port}`);
});
 