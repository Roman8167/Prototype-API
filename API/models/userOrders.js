const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userOrderSchema = new Schema({
    product:{
        type:String,
        
    },
    productType:{
        type:String,
        
    },
    supplier:{
        type:String,
        
    },
    total_viss:{
        type:Number
    },
    totalExpense:{
        type:Number
    },
    
    created_date:{
        type:Date,
        default:Date.now
    }
});
module.exports = mongoose.model("userOrders",userOrderSchema)