import express from "express";

import {createServer} from "node:http";
import { connectToSocket } from "./controllers/socketManager.js";
import  cors  from "cors";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.use(express.json());
app.use(cors());



const start = ()=>{

    server.listen(8000 , ()=>{
        console.log("server is listening on port: "+8000)
    });
}

start();