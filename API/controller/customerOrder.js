const customerOrders = require("../models/customerOrders")
const ObjectID = require("mongodb").ObjectID
exports.findAll = (req,res,next)=>{
    customerOrders.find({}).then(data=>{
        res.json({
            success:true,
            data:data
            
        })
        
    }).catch((err)=>{
        res.json({success:false,err:err});
        console.log(err)
    })
}
exports.findById = (req,res,next)=>{
    var id = req.params.id
    customerOrders.findById({_id:ObjectID(id)}).then(data=>{
        res.json({success:true,data:data})
    }).catch((err)=>{
        res.json(err);
        console.log(err)
    })
}
exports.deletebyId = (req,res,next)=>{
    var id = req.params.id
    customerOrders.findByIdAndDelete({_id:ObjectID(id)}).then(data=>{
        res.json({success:true,data:data})
    }).catch((err)=>{
        res.json({success:false,err:err});
        
    })
}
exports.deleteAll = (req,res,next)=>{
    customerOrders.remove().then(data=>{
        res.json({success:true,data:data})
    }).catch((err)=>{
        res.json({success:false,err:err})
    })
}
exports.updatebyId = (req,res,next)=>{
    var id = req.params.id;
    customerOrders.findByIdAndUpdate({_id:ObjectID(id)},{$set:{customerName:req.body.customerName,
        telephone:req.body.telephone,
        customerAddress:req.body.customerAddress,
        township:req.body.township,
        city:req.body.city,
        subtotal:req.body.subtotal,
        viss:req.body.viss}}).then(data=>{
            res.json({success:true,data:data})
        }).catch((err)=>{
            res.json({success:false,err:err})
        })
}
exports.insert = (req,res,next)=>{
    const newCustomerOrders = new customerOrders({
        customerName:req.body.customerName,
        telephone:req.body.telephone,
        customerAddress:req.body.customerAddress,
        township:req.body.township,
        city:req.body.city,
        subtotal:req.body.subtotal,
        viss:req.body.viss
    });
    newCustomerOrders.save().then(data=>{
        res.json({success:true,data:data})
    }).catch((err)=>{
        console.log(err);
        res.json({success:false,err:err})
    })
}
