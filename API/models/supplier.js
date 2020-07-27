const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const supplierSchema = new Schema({
    supplierName:{
        type:String,
        
    },
    supplierTelephone:{
        type:Number,
       
    },
    supplierAddress:{
        type:String,
        
    },
    supplierTownShip:{
        type:String,
        
    },
    supplierCity:{
        type:String,
        
    },
    created_date:{
        type:Date,
        default:Date.now
    }
});
module.exports = mongoose.model("supplier",supplierSchema)