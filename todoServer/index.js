import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import routerIndex from './routes/index_router.js';


const app = express();
app.use(cors());
app.use(express.json())
dotenv.config();

//connect to db
mongoose.connect(process.env.MONGODB_URL, (err) => {
    if (!err) { console.log("connected to",process.env.MONGODB_URL); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

//route middleware
app.use("/api",routerIndex);

app.listen(4000,()=>console.log("Server Started at port: 4000"));