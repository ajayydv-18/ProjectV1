import mongoose from "mongoose";
import { Schema } from "mongoose";


const userSchema = new Schema({
   email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
   },
   username: {
    type: String,
    required: [true, "Your username is required"],
   },
   role: {
      type: String,
      enum: ["user", "mentor", "admin"], // Teeno roles handle ho jayenge
      default: "user"
    },
   password: {
    type: String,
    required: [true, "Your password is required"],
   },


   // for mentor

   bio : {
      type: String
   },

   sessions : {
      type: Number
   },

   students : {
      type : Number
   },

   chatPrice : {
      type : Number
   },

   videoPrice : {
      type : Number
   }

});


export default userSchema;