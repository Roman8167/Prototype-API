const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userAccountSchema = new schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    password:{
        type:String
    },
    createAccount_date:{
        type:Date,
        default:Date.now
    }
});
module.exports = mongoose.model("userAccount",userAccountSchema)