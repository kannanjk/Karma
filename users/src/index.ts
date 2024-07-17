import dotenv from 'dotenv'
import express, { Request, Response } from "express";
import userRoute from './Routes/UserRoute'

dotenv.config();

const app = express();
app.use(express.json())
const port = process.env.PORT;

app.use('/auth',userRoute)


app.listen(port, () => {
  console.log(`User Server is running at ${port}`);
});
