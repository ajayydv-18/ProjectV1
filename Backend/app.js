import dotenv from "dotenv";
dotenv.config();
import express from "express";
import {createServer} from "node:http";
import { connectToSocket } from "./controllers/socketManager.js";
import  cors  from "cors";
import mongoose, { mongo } from "mongoose";
import userRouter from "./routes/user.js"
const app = express();
const server = createServer(app);
const io = connectToSocket(server);
app.use(cookieParser()); 
app.use(express.json());
import sessionRouter from "./routes/session.js";


app.use(cors({
  origin: ['http://localhost:5174' , 'https://project-v1-338y.vercel.app'], // <-- exact frontend URL
  credentials: true               // <-- allow cookies
}));



app.use("/user" , userRouter);
app.use("/session" , sessionRouter);



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