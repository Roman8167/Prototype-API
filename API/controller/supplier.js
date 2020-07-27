const supplier = require("../models/supplier");
const ObjectID = require("mongodb").ObjectID
exports.findAll = (req,res,next)=>{
    supplier.find({}).then(data=>{
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
    supplier.findById({_id:ObjectID(id)}).then(data=>{
        res.json({success:true,data:data})
    }).catch((err)=>{
        res.json(err);
        console.log(err)
    })
}
exports.deletebyId = (req,res,next)=>{
    var id = req.params.id
    supplier.findByIdAndDelete({_id:ObjectID(id)}).then(data=>{
        res.json({success:true,data:data})
    }).catch((err)=>{
        res.json({success:false,err:err});
        
    })
}
exports.deleteAll = (req,res,next)=>{
    supplier.remove().then(data=>{
        res.json({success:true,data:data})
    }).catch((err)=>{
        res.json({success:false,err:err})
    })
}
exports.updatebyId = (req,res,next)=>{
    var id = req.params.id;
    if(!supplierName||!supplierTelephone||!supplierAddress||!supplierTownShip||!supplierCity){
        res.status(404).json({message:"Cannot be Inserted"})
    }
    else{
        supplier.findByIdAndUpdate({_id:ObjectID(id)},{$set:{supplierName:req.body.supplierName,
            supplierTelephone:req.body.supplierTelephone,
            supplierAddress:req.body.supplierAddress,
            supplierTownShip:req.body.supplierTownShip,
            supplierCity:req.body.supplierCity}}).then(data=>{
                res.json({success:true,data:data})
            }).catch(err=>{
                res.json({success:false,err:err})
            })
    }
}
exports.insert = (req,res,next)=>{
    
    var{supplierName,supplierTelephone,supplierAddress,supplierTownShip,supplierCity} = req.body
    if(!supplierName||!supplierTelephone||!supplierAddress||!supplierTownShip||!supplierCity){
        res.status(404).json({message:"Cannot be Inserted"})
    }
    else{
        const newSupplier = new supplier({
            supplierName:req.body.supplierName,
            supplierTelephone:req.body.supplierTelephone,
            supplierAddress:req.body.supplierAddress,
            supplierTownShip:req.body.supplierTownShip,
            supplierCity:req.body.supplierCity

        });
        newSupplier.save().then(data=>{
            res.json({success:true,data:data})
        }).catch((err)=>{
            res.json({success:false,err:err})
        })
    }
}