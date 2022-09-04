require('dotenv').config();
const express = require('express');
const app = express();
const Router = require('./route/main.route')


app.use(express.json());

app.get('/p', function(req, res) {
    console.log(req.body)
    res.send("tagId is set to " );
  });
app.get('/user/:id', function (req, res) {
  res.json('user ' + req.params.id)
})
app.use(Router)
const port = process.env.PORT || 80;

app.listen(port, ()=> console.log(`server running in port ${port}`))
