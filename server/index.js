import express from 'express'
import mongoConnection from './db.js'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/authRoutes.js'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()
app.use(express.json()) 

mongoConnection();
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173',   //only this localhost can access the origin
    credentials: true
}))   //cors is used to connect frontend and backend used for security purpose

const PORT = process.env.PORT

//test Api(optional)
app.get("/test",(req,res)=>{
    res.send("hello world")
})

app.use('/auth',userRoutes)

app.listen(PORT,()=>{
    console.log("My new server running on "+PORT)
})

