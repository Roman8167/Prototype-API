const express = require("express");
const router = express.Router();
const customerOrdersController = require("../controller/customerOrder");
router.get("/orders",customerOrdersController.findAll);
router.get("/orders/:id",customerOrdersController.findById)
router.post("/orders",customerOrdersController.insert);
router.patch("/orders/:id",customerOrdersController.updatebyId);
router.delete("/orders/:id",customerOrdersController.deletebyId);
router.delete("/orders",customerOrdersController.deleteAll)
module.exports = router;