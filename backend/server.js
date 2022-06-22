import app from './app.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

const port = 7000;

dotenv.config({
        path: './.env'
})

const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)
        .then(connection => console.log("mongodb connected"))
        .catch(err => console.log(`error::: ${err}`))

app.listen(port, () => {
        console.log("server is listening on port 7000")
})