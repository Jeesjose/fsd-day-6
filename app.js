var express = require('express');
var dotenv = require('dotenv');
var userRoutes = require('./route/userroute')
var pRoutes = require('./route/productroute')
 var app = express();
 

 dotenv.config();
 require('./db');
 var port = process.env.port

 app.use(express.json());

app.use('/api',userRoutes)
app.use('/api1',pRoutes)
 app.listen(port,()=>{
    console.log(`server is up and running in ${port}`)
 })


