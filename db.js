var mongoose = require('mongoose');
//mongoose.connect("mongodb+srv://thanikkaljees2020:jeesjose@cluster0.dakkqtq.mongodb.net/assement?retryWrites=true&w=majority&appName=Cluster0")
mongoose.connect(process.env.mongodb_url)
.then(()=>{
    console.log("connected to DB")

}).catch((err)=>{ 
    console.log(err);
    
})