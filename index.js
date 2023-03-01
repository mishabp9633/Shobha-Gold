import cors from "cors"
import dotenv from "dotenv"
import {errorHandling} from './middlewares/error.middleware.js'
import express from 'express'
import { Initialise } from './database/connection.js'

import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import goldRateRouter from './routes/goldRate.route.js'

    await Initialise()

    dotenv.config()

    const app = express()

    app.use(cors('*'))
    app.use(express.json({limit:"50mb"}))
    app.use(express.urlencoded({limit:"50mb",extended:true}))

    
    app.use(
        userRouter,
        authRouter,
        goldRateRouter
        )
    
      app.use(errorHandling)
    
    const port=process.env.PORT || 5000
    app.listen(port , ()=>{
        console.log(`server listening at http://localhost:${port}`);
    })
    