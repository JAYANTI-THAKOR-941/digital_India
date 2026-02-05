import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import path from 'node:path';

dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))


// import routes
import userRoutes from './routes/userRoutes.js'

app.use('/api/user',userRoutes);

connectDB();

app.get('/',(req,res)=>{
    res.end("Digital India Server is Running.!");
});

app.listen(5000,()=>{
    console.log(`server is on http://localhost:5000`);
})