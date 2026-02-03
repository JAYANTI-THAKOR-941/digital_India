import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());


connectDB();

app.get('/',(req,res)=>{
    res.end("Digital India Server is Running.!");
});

app.listen(5000,()=>{
    console.log(`server is on http://localhost:5000`);
})