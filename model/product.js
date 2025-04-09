var mongoose = require('mongoose');
var pSchema = mongoose.Schema(
    {
        pName:String,
        pQuantity:Number,
        pPrice:Number,
        pBrand:String


    }
)
var pModel = mongoose.model("product",pSchema);
module.exports = pModel