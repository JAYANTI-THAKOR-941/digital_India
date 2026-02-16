
// const express = require('express')

import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const app = express();


connectDB();
const PORT = process.env.PORT || 3000

// middlewares
app.use(express.json());


// import routes
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js'

app.use('/api/user',userRoutes);
app.use('/api/product',productRoutes);



app.get('/',(req,res)=>{
    res.send('Server is Working..!!');
});

app.listen(PORT,()=>{
    console.log(`Server is Running on : http://localhost:5000`);
})
