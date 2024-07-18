import dotenv from 'dotenv'
import 'reflect-metadata'
import express from "express";
import userRoute from './Routes/UserRoute'
import adminRoute from './Routes/AdminRoute'
import cookieSession from 'cookie-session';

dotenv.config();

const app = express();
app.use(express.json())
const port = process.env.PORT;

app.use('/auth', userRoute)
app.use('/admin', adminRoute)
app.use(
  cookieSession({
    signed: false,
    secure: false
  })
)


app.listen(port, () => {
  console.log(`User Server is running at ${port}`);  
});
