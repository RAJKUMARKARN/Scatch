const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/scatch")
.then(()=>{
  console.log("✅ Mongo DB connected");
})
.catch((err)=>{
    console.log("❌ Error:", err);
});

module.exports = mongoose.connection;


