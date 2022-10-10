const {Router}=require("express");
const router=Router();
const LogEntry=require("../assets/logEntry")
router.get("/",async(req,res)=>{
    try{
        const logEntry=await LogEntry.find()
        res.send(logEntry)
    }
    catch(err)
    {
        next(err);
    }
})
router.post("/",async(req,res,next)=>{
    try{
        const logEntry=new LogEntry(req.body);
        const result=await logEntry.save();
        res.send(result);
    }
    catch(err)
    {
        err.name==='ValidationError'?res.status(422):"";
        next(err);
    }
})
module.exports=router;