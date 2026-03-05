
import User from "../models/user.js";
import { createSecretToken } from "../utils/createToken.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const login = async (req , res)=>{

    try{

        const {email , password} = req.body;
        if(!email || !password){
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({msg: "User not found"});
        }
        const isPasswordCorrect = await bcrypt.compare(password , user.password);


        let token = createSecretToken(user._id);

        if(isPasswordCorrect) {
            res.cookie("token", token, {
                httpOnly: true,         // Security ke liye best (JS access nahi kar payega)
                secure: true,           // Render (HTTPS) ke liye mandatory hai
                sameSite: "none",       // Localhost aur Render ke beech communication ke liye must hai
                maxAge: 24 * 60 * 60 * 1000, // 1 din ki expiry (Iske bina refresh par gayab hogi)
            });

            res.status(201).json({ 
                message: "User logged in successfully", 
                success: true, 
                user 
            });
        }
        else{
            return  res.status(401).json({msg: "Invalid credentials"});
        }

    }
    catch(e){
        console.log(e);
        res.status(500).json({ message: "Server error", error });
    }
}