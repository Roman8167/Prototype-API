const mongoose = require("mongoose");
const schema = mongoose.Schema;
const productSchema = new schema({
    product:{
        type:String,
        
    },
    category:{
        type:String,
        
    },
    description:{
        type:String,
        
    },
    price:{
        type:Number,
        
    },
    created_date:{
        type:Date,
        default:Date.now
    }
});
module.exports = mongoose.model("products",productSchema)