const crypto = require("crypto").randomBytes(64).toString("hex");
//export the random serial number
module.exports = crypto;