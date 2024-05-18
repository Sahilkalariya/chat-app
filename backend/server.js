import express from 'express';
import dotenv from 'dotenv';
//import functions
import authRouter from './routes/auth.router.js'
import connectToMongoDB from './db/connectToMongoDB.js';
import messageRoutes from "./routes/message.routes.js";
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.roter.js'
import { app, server } from './socket/socket.js';


const port = process.env.PORT || 5000;

dotenv.config();


//middlewares
//app.use() any req get or post are send here.
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth" , authRouter);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRouter);


app.get('/', (req, res) => {
  res.send('Helloadsw World!')
})

server.listen(port, () => {
  connectToMongoDB();
  console.log(`Example app listening on port ${port}`)
})