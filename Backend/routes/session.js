import express from "express";
const router = express.Router();
import User from '../models/user.js'
import { createSecretToken } from "../utils/createToken.js";
import {signup , login} from "../controllers/user.js";
import { protect } from "../middleware/protect.js";
import { booking , myBookings } from "../controllers/session.js";

router.post('/booking' , booking);
router.get('/myBookings' , protect, myBookings);

export default router;