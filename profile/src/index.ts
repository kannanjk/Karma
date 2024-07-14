const dotenv = require('dotenv');
import express, { Request, Response } from "express";

dotenv.config();

const app = express();
const port = process.env.PORT;
app.get('/', (req: Request, res: Response) => {
  res.send('Profile Server');
});

app.listen(port, () => {
  console.log(`Profile Server is running at ${port}`);
});
