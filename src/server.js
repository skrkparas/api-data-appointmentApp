require('dotenv').config();
const express = require('express');
const app = express();
const Router = require('./route/main.route')


app.use(express.json());

app.use(Router)
const port = process.env.PORT || 80;

app.listen(port, ()=> console.log(`server running in port ${port}`))
