import {dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname (__filename)


import express from 'express';

const app = express();

app.use(express.json())
app.use(express.static(`${__dirname}/public`))


// unhandled routes
app.all("*", (req, res) => {
        res.status(404).json({
                status: "fail",
                message: `can't find ${req.originalUrl} on this server`
        })
})


// global error handler

app.use((err, req, res) => {
        err.statusCode = err.statusCode || 500;
        err.status = err.status || "error";

        res.status(err.statusCode).json({
                status: err.status,
                message: err.message
        })
})



export default app;
