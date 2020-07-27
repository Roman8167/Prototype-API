const express = require("express");
const router = express.Router();
const register = require("../controller/register");
router.get("/register",register.getRegister)
router.post("/register",register.register)
module.exports = router