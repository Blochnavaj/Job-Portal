 import express from 'express';
 import cookieParser from 'cookie-parser';
 import cors from 'cors';
 import dotenv from 'dotenv';
import connectDB from './utils/db.js';
 dotenv.config({});

const app = express();

// //Basic api 
// app.get('/home', (req,res)=>{
//     return res.status(200).json({
//         message:"I am coming from backend",
//         Success : true

//     })
// })


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
const corsOptions = {
    origin:'http//localhost:5173',
    Credentials: true
}
app.use(cors(corsOptions));





const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    connectDB();
  console.log(`server running at ${PORT}`);
})