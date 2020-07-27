const userOrders = require("../models/userOrders");
const ObjectID = require("mongodb").ObjectID;
exports.findAll = (req,res,next)=>{
    userOrders.find({}).then(data=>{
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
    userOrders.findById({_id:ObjectID(id)}).then(data=>{
        res.json({success:true,data:data})
    }).catch((err)=>{
        res.json(err);
        console.log(err)
    })
}
exports.deletebyId = (req,res,next)=>{
    var id = req.params.id
    userOrders.findByIdAndDelete({_id:ObjectID(id)}).then(data=>{
        res.json({success:true,data:data})
    }).catch((err)=>{
        res.json({success:false,err:err});
        
    })
}
exports.deleteAll = (req,res,next)=>{
    userOrders.remove().then(data=>{
        res.json({success:true,data:data})
    }).catch((err)=>{
        res.json({success:false,err:err})
    })
}
exports.updatebyId = (req,res,next)=>{
    var id = req.params.id;
    var{product,productType,supplier,total_viss,totalExpense} = req.body
    if(!product||!productType||!supplier||!total_viss||!totalExpense){
        res.status(404).json({message:`Error ${404}`})
    }
    else{

    
    userOrders.findByIdAndUpdate({_id:ObjectID(id)},{$set:{product:req.body.product,
        productType:req.body.productType,
        supplier:req.body.supplier,
        total_viss:req.body.total_viss,
        totalExpense:req.body.totalExpense}}).then(data=>{
            res.json({success:true,data:data});
            console.log(data)
        }).catch((err)=>{
            res.json({success:false,err:err})
        });
    }
}
exports.insert = (req,res,next)=>{
    var{product,productType,supplier,total_viss,totalExpense} = req.body
    if(!product||!productType||!supplier||!total_viss||!totalExpense){
        res.status(404).json({message:`Error ${404} cannot be inserted.`})
    }
    else{
        const newOrders = new userOrders({
            product:req.body.product,
            productType:req.body.productType,
            supplier:req.body.supplier,
            total_viss:req.body.total_viss,
            totalExpense:req.body.totalExpense
        });
        newOrders.save().then(data=>{
            res.json({success:true,data:data})
        }).catch((err)=>{
            res.json({success:false,err:err})
        })
    }
}