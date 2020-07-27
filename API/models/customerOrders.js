const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const customerOrders = new Schema({
    customerName:{
        type:String,
        
    },
    telephone:{
        type:Number,
        
    },
    customerAddress:{
        type:String,
        
    },
    township:{
        type:String,
        
    },
    city:{
        type:String,
        
    },
    subtotal:{
        type:Number,
        
    },
    viss:{
        type:Number,
        
    },
    created_date:{
        type:Date,
        default:Date.now
    }
    
});
module.exports = mongoose.model("customerOrders",customerOrders)