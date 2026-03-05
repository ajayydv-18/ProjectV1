import dotenv from "dotenv";
dotenv.config();
import express from "express";
import {createServer} from "node:http";
import { connectToSocket } from "./controllers/socketManager.js";
import  cors  from "cors";
import mongoose, { mongo } from "mongoose";
import cookieParser from "cookie-parser"; // 1. Import
import userRouter from "./routes/user.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);
app.use(cookieParser()); 
app.use(express.json());
import sessionRouter from "./routes/session.js";
import mentorRouter from "./routes/mentor.js";

app.use(cors({
  origin: ['http://localhost:5174' , 'https://project-v1-338y.vercel.app'], 
  credentials: true               
}));



app.use("/user" , userRouter);
app.use("/session" , sessionRouter);
app.use("/mentor" , mentorRouter);



const start = async ()=>{

    server.listen(8000 , ()=>{
        console.log("server is listening on port: "+8000)
    });
     let url = process.env.MONGO_URL;
     mongoose.connect(url)
    .then(()=>console.log("database connected"))
    .catch((e)=>console.log("database not connected"));

    
}

start();