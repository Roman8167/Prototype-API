const Users = require("../models/Users");
const bcryptjs = require("bcryptjs")
exports.getRegister = (req,res,next)=>{
    res.send("register")
}
exports.register = (req,res,next)=>{
    var{name,email,password,password2} = req.body;
    if(!name||!email||!password){
        res.status(404).json({message:"Please fill the forms!"})
    } 
    if(req.body.password!=req.body.password2){
        res.status(404).json({message:"Passwords do not match"})
    }
    if(req.body.password.length<6){
        res.status(404).json({message:'Password is not strong enough'})
    }
    else{
        Users.findOne({email:email}).then(user=>{
            if(user){
                res.sendStatus(404).json({message:"Email is already registered"})
            }
            
            else{
                const salt = 10;
                bcryptjs.hash(req.body.password,salt,(err,hash)=>{
                    if(err){
                        res.sendStatus(404).json({message:"Error"})
                    }
                    else{
                        const newUsers = new Users({
                            name:req.body.name,
                            email:req.body.email,
                            password:hash
                        })
                        newUsers.save().then(data=>{
                            res.json({success:true,data:data})
                        }).catch((err)=>{
                            res.json({success:false,err:err})
                        })
                        
                    }
                })
            }
        })
    }
}