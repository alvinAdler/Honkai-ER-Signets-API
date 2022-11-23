import { createServer } from 'http'
import dotenv from 'dotenv'
import mongoose from "mongoose"
import express from 'express'
import cors from 'cors'

import signetRoute from './routes/signet-routes.js'

dotenv.config()

const app = express()
const httpServer = createServer(app)

app.use(express.json())
app.use(cors())

app.use("/signets", signetRoute)

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on("error", (err) => console.log(err))
db.once("open", () => console.log("Connected to the database"))

httpServer.listen(process.env.PORT_NUMBER, () => {
    console.log(`Server started on port ${process.env.PORT_NUMBER}`)
})