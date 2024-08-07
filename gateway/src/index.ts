import express from "express";
// import dotenv from 'dotenv'
import cors from 'cors'
import proxy from 'express-http-proxy'

// dotenv.config();

const app = express();
app.use(cors())
// const port = process.env.PORT;

// app.use('/user', proxy('http://users:3001'));
app.use('/user',proxy('http://localhost:3001'))   
app.use('/post',proxy('http://localhost:3002'))
app.use('/profile',proxy('http://localhost:3003'))   
app.use('/chat',proxy('http://localhost:3004'))   

app.listen(3005, () => {
  console.log(`Gateway Server is running at ${3005}`);
});
