const express = require("express");
const router = express.Router();
const supplier = require("../controller/supplier");
router.get("/supplier",supplier.findAll)
router.get("/supplier/:id",supplier.findById);
router.post("/supplier",supplier.insert);
router.delete("/supplier",supplier.deleteAll);
router.delete("/supplier/:id",supplier.deletebyId);
router.patch("/supplier/:id",supplier.updatebyId);
module.exports = router;
