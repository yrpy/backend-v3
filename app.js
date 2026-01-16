import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import patientRoute from './routes/patientRoute.js'

// config Env
dotenv.config()

// db connection
connectDB()

// Rest Object
const app = express()

// cors
app.use(cors())

// middleware bodyparser
app.use(express.json())

// Test API
app.get('/', (req, res) => {
    res.send({ msg: 'Welcome to MERN CRUD App!'})
})
app.use('/api/v1/patients', patientRoute)

// port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on ${process.env.PORT}`))
