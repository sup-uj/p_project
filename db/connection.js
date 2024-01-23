const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_CONN,).then(()=>{
    console.log(`connection successful`);
}).catch((err)=>{
    console.log(err);
});