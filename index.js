import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { getData } from './services/cryptoService.js';
import {job} from './services/cronJob.js';
import {getSpecificData} from './services/cryptoSpecificService.js'
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected");
    job();
});

app.get('/',(req,res)=>{
    res.send("Hello world!");
});

app.get('/stats',async (req,res)=>{
    let coin = req.query;
    let data = await getSpecificData(coin.coin);
    res.send(data);
});

app.get('/deviation',async (req,res)=>{
    res.send("work to do");
})

app.listen(port,()=>{
    console.log(`listening at ${port}`);
});