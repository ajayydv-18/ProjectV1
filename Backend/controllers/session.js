
import Session from "../models/session.js";
import User from "../models/user.js";
import { createSecretToken } from "../utils/createToken.js";
import bcrypt from "bcrypt";
import  { uuid } from 'uuidv4';

export const booking = async (req , res) => {
    
    try{
     console.log("booking req is coming");
     let formData = req.body;
     console.log(formData);
     let newSession = new Session(formData);
     let code = uuid();
     newSession.meetingLink = `https://project-v1-338y.vercel.app/${code}`
     await newSession.save();
     console.log(newSession);
     res.json({message : "Booking confirmed"});
    }catch(e){
       res.json({message : "Something went wrong"});
    }
}

