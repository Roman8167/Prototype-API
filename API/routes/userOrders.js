const express = require("express");
const router = express.Router();
const userOrders = require("../controller/userOrders");
router.get("/userOrders",userOrders.findAll);
router.get("/userOrders/:id",userOrders.findById);
router.post("/userOrders",userOrders.insert);
router.patch("/userOrders/:id",userOrders.updatebyId);
router.delete("/userOrders/:id",userOrders.deletebyId);
router.delete("/userOrders",userOrders.deleteAll);
module.exports = router