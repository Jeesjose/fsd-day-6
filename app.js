var express = require("express")
require('./db')
var userRoutes = require('./route/userroute')
var pRoutes = require('./route/productroute')
 var app = express();
 app.use(express.json());

 var port =3001;




app.use('/api',userRoutes)
app.use('/api1',pRoutes)
 app.listen(port,()=>{
    console.log(`server is up and running in ${port}`)
 })


