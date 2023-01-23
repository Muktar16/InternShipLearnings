import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from "morgan";
import router from './routes/router.js';
import * as mongoose from 'mongoose';

dotenv.config()

const app = express();

app.use(json());
app.use(cors());

app.use('/api',router);

//DB connection
mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
})
.then(() => console.log("Database Connected Successfully"))
.catch((err) => console.log(err));

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`The server is running on port ${port} in ${process.env.STAGE} mode`);
});