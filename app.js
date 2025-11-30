 const express = require("express");
 const app = express();
 const db= require("./config/mongooseConnection.js")
 const cookieParser = require("cookie-parser");
 const path = require("path");
 const userRouter = require("./routes/userRouter.js");
 const ownerRouter = require("./routes/ownerRouter.js");
 const productsRouter = require("./routes/Products.router.js");


 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(cookieParser());
 app.use(express.static(path.join(__dirname,"public")));
 app.set("view engine", "ejs");



// app.use("/owners", ownerRouter);
app.use("/user", userRouter);
// app.use("/products", productsRouter);

 

 app.listen(3000 ,()=>{
    console.log(`server is running at 3000`)
 });