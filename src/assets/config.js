require("dotenv").config();
const mongoose=require("mongoose");
module.export=mongoose.connect(`${process.env.DATABASE_URL}`,{useNewUrlParser:true});