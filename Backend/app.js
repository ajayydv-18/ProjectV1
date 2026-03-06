import dotenv from "dotenv";
dotenv.config();
import express from "express";
import {createServer} from "node:http";
import { connectToSocket } from "./controllers/socketManager.js";
import  cors  from "cors";
import mongoose, { mongo } from "mongoose";
import cookieParser from "cookie-parser"; // 1. Import
import userRouter from "./routes/user.js";

import User from "./models/user.js";
import { createSecretToken } from "./utils/createToken.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


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


// import dns from 'dns';
// dns.setServers(["1.1.1.1", "8.8.8.8"]);


app.use("/user" , userRouter);
app.use("/session" , sessionRouter);
app.use("/mentor" , mentorRouter);



// app.post("/add" ,  async (req , res)=>{

//       try{
//       let {username , email , password, } = req.body;
//       if(!username || !email || !password){
//         return res.status(400).json({ message: "All fields are required" });
//       }

//       let existingUser = await User.findOne({email});
      
//       if(existingUser){
//         return res.status(400).json({ message: "user already exist" });
//       }
//        const hashedPassword = await bcrypt.hash(password , 10);

//        const user = new User({
//         email : email,
//         username : username,
//         password : hashedPassword,
//         role: "mentor",
//         imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
//         specialization: "Corporate Law",
//         rating: 4,
//         sessions: 450,
//         experience: 12,
//         experience: 12,
//         experience: 12,
//         students: 280,
//         responseTime: "< 1hrs",
//         chatPrice: 1500,
//         videoPrice: 3500
//        });

//        await user.save();

//         let token = createSecretToken(user._id);
//         console.log(user);
//         res.cookie("token", token, {
//             httpOnly: true,         // Security ke liye best (JS access nahi kar payega)
//             secure: true,           // Render (HTTPS) ke liye mandatory hai
//             sameSite: "none",       // Localhost aur Render ke beech communication ke liye must hai
//             maxAge: 24 * 60 * 60 * 1000, // 1 din ki expiry (Iske bina refresh par gayab hogi)
//         });
//         res.status(201).json({ message: "User signed in successfully", success: true, user });

//         }
//     catch(error){
//         console.log(error);
//         res.status(500).json({ message: "Server error", error });
//     }


// })




const start = async ()=>{

    server.listen(8000 , ()=>{
        console.log("server is listening on port: "+8000)
    });
    let url = 'mongodb+srv://ry957933_db_user:4IZbQnCnH78h830S@lexbridge.ahjrza9.mongodb.net/?appName=lexbridge';
     mongoose.connect(url)
    .then(()=>console.log("database connected"))
    .catch((e)=>console.log("database not connected"));

    
}

start();