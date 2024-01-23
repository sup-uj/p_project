import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/Shoppers",).then(()=>{
    console.log(`connection successful`);
}).catch((err)=>{
    console.log(err);
});