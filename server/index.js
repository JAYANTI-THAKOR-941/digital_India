import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send('Digital India - Server is Working.!!');
})

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is Runing on : http://localhost:${PORT}`);
})
