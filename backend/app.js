import {dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname (__filename)


import express from 'express';

const app = express();

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

export default app;
