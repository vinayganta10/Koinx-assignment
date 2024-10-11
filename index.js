import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { getData } from './services/cryptoService.js';
import {job} from './services/cronJob.js';
import {getSpecificData} from './services/cryptoSpecificService.js';
import { calculate } from './services/standardDeviationService.js';
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
    let coin = req.query;
    let deviation = await calculate(coin.coin);
    res.send({"deviation":deviation});
})

app.listen(port,()=>{
    console.log(`listening at ${port}`);
});