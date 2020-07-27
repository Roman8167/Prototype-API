const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifytToken");
const randomNumber = require("../randomKey");
const jwt = require("jsonwebtoken");
router.get("/verifyToken",verifyToken.verifyToken,function(req,res){
    jwt.verify(req.token,randomNumber,function(err,authData){
        if(err){
            res.status(404).json({message:'Auth Failed'})
        }
        else{
            res.json({authData:authData})
        }
    })
})


module.exports = router