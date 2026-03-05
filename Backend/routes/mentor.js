import express from "express";
const router = express.Router();
import User from '../models/user.js'
import { createSecretToken } from "../utils/createToken.js";
import { isMentor } from "../middleware/isMentor.js";

router.post("/login" , login);

export default router;