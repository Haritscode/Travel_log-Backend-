const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const DefaultRequiredLocation={
    type:Number,
    required:true,
}
const DefaultRequiredData={
    type:Date,
    default:Date.now
}
const logEntrySchema=new Schema({
    title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    comments:String,
    rating:{
        type:Number,
        min:0,
        max:10,
        default:0,
    },
    Image:String,
    visitData:{
        type:Date,
        required:true, 
    },
    latitude:{...DefaultRequiredLocation,min:-89.99999999,max:89.99999999},
    longitude:{...DefaultRequiredLocation,min:-180.99999999,max:179.99999999},
    Created_at:DefaultRequiredData,
    Updated_at:DefaultRequiredData,

})
const LogEntry=mongoose.model("LogEntry",logEntrySchema)
module.exports=LogEntry;