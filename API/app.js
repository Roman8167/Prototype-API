const express = require("express");
const app  = express();
const mongodb = require("mongodb");
const bodyParser = require("body-parser")
const cors = require("cors");
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/finance-api";
const userOrders = require("./models/userOrders")
const productDetails = require("./models/products");
const customerOrders = require("./models/customerOrders");
const bodyParserJson = require("./middleware/bodyParser");
const supplier = require("./models/supplier");
const urlencoded = bodyParser.urlencoded({extended:false})
const jwt = require("jsonwebtoken");

///routes
const router = require("./routes/product");
const router2 = require("./routes/supplier");
const router3 = require("./routes/userOrders");
const router4 = require("./routes/customerOrder");
const router5 = require("./routes/register");
const router6 = require("./routes/login");
const router7 = require("./routes/getToken")
app.get("/",function(req,res){
    res.send("Welcome");
});
////middlewares
app.use(cors());
app.use("/",urlencoded,bodyParserJson,router);
app.use("/",urlencoded,bodyParserJson,router2);
app.use("/",urlencoded,bodyParserJson,router3);
app.use("/",urlencoded,bodyParserJson,router4);
app.use("/",urlencoded,bodyParserJson,router5);
app.use("/",urlencoded,bodyParserJson,router6);
app.use("/",router7)
app.use(bodyParser.json());
mongoose.connect(url,{ useNewUrlParser: true },function(){
    console.log("Connected to Mongooose..")
})
const port = 3000;
app.listen(port,()=>{
    console.log(`Server is up and running at ${port}`)
})