const express = require("express");
const router = express.Router();
const product = require("../controller/product");
router.get("/products",product.findAll);
router.get("/products/:id",product.findById);
router.post("/products",product.insert);
router.delete("/products",product.deleteAll);
router.delete("/products/:id",product.deletebyId);
router.patch("/products/:id",product.updatebyId)




module.exports = router;