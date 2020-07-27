const products = require("../models/products");
const ObjectId = require("mongodb").ObjectID;
exports.findAll = (req,res,next)=>{
    products.find({}).then(data=>{
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
    products.findById({_id:ObjectID(id)}).then(data=>{
        res.json({success:true,data:data})
    }).catch((err)=>{
        res.json(err);
        console.log(err)
    })
}
exports.deletebyId = (req,res,next)=>{
    var id = req.params.id
    products.findByIdAndDelete({_id:ObjectID(id)}).then(data=>{
        res.json({success:true,data:data})
    }).catch((err)=>{
        res.json({success:false,err:err});
        
    })
}
exports.deleteAll = (req,res,next)=>{
    products.remove().then(data=>{
        res.json({success:true,data:data})
    }).catch((err)=>{
        res.json({success:false,err:err})
    })
}
exports.updatebyId = (req,res,next)=>{
    var id = req.params.id;
    products.findByIdAndUpdate({_id:ObjectId(id)},{$set:{product:req.body.product,
        category:req.body.category,
        description:req.body.description,
        price:req.body.price}}).then(data=>{
            res.json({success:true,data:data})
        }).catch((err)=>{
            res.json({success:false,err:err})
            console.log(err)
        })
}
exports.insert = (req,res,next)=>{
    const newProducts = new products({
        product:req.body.product,
        category:req.body.category,
        description:req.body.description,
        price:req.body.price
    });
    newProducts.save().then(data=>{
        res.json({success:true,data:data})
    }).catch((err)=>{
        res.json({success:false,err:err});
        console.log(err)
    })
}
