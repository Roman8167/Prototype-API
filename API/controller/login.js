const Users = require("../models/Users");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const randomKey = require("../randomKey");
exports.getLogin = (req,res,next)=>{
    res.send("Login..")
}
exports.login = (req,res,next)=>{
    var {email,password} = req.body
    if(!email||!password){
      res.status(404).json({message:"Please fill the forms!"})  
    }
    else{
        Users.findOne({email:email}).then(result=>{
            if(!result){
                res.status(404).json({message:'Could not find user'})
            }
            
            else{
                bcryptjs.compare(req.body.password,result.password,function(err,isMatch){
                    if(isMatch){
                       jwt.sign({result:result},randomKey,function(err,token){
                           if(err){
                               res.status(401).json({message:"Auth Failed"})
                           }
                           else{
                               res.json({success:true,token:token})
                           }

                       })
                    
                    }
                    else{
                        res.status(401).json({message:"Auth Failed"})
                    }
                })
            }
        })
    }
}