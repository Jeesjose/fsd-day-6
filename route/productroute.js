var express = require('express');
var router = express.Router();
var pModel =require('../model/product');
router.post('/',(req,res)=>{
   try {
       pModel(req.body).save();
       res.send("product added")
   } catch (error) {
      res.send(error) 
   }
})
router.get('/product',async(req,res)=>{
    try {
        var data = await pModel.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})
router.delete('/product/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await pModel.findByIdAndDelete(req.params.id);
        res.send("data deleted")
        
    } catch (error) {
        res.send(error)
        
    }
})
module.exports = router