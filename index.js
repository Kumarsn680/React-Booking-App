import dotenv from 'dotenv'
dotenv.config();
import  express  from "express";
import authRoutes from './routes/authRoutes.js'
import hotelRoutes from "./routes/hotelRoutes.js";
import roomsRoutes from "./routes/roomsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import connect from './utils/conncetion.js';
import  { errorCatcher } from './utils/customError.js';
import cookieParser from 'cookie-parser'

connect()
const app = express();

app.use(express.json())
app.use(cookieParser())

app.use("/auth", authRoutes);
app.use("/hotel", hotelRoutes);
app.use("/room", roomsRoutes);
app.use("/user", usersRoutes);

// ERROR HANDLING
app.use((err,req,res,next)=>{
    res.send(errorCatcher(err))
})

app.get('/',(req,res)=>{
    res.send("Abhi main page par")
})

app.listen(8000,()=>{
    console.log("Connected hai bhai")
})