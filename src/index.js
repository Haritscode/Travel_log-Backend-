require("dotenv").config();
const {notFound,errorHandler}=require("./middelwares")
const express = require("express");
require("./assets/config")
const app = express();
const morgan = require("morgan");
const logs=require("./apis/logs")
const Port = process.env.PORT || 4004
const helmet = require("helmet");
const cors=require("cors");
app.use(morgan("common"))
app.use(helmet());
app.use(express.json())
app.use(cors({
    origin:process.env.CORS_ORIGIN
}))
app.get("/",  ( req,res ) => {
    res.json({
        message:"Hello Server"
    })
})
app.use('/api/log',logs)
app.use(notFound)
app.use(errorHandler)
app.listen(Port,()=>{
    console.log(`Server Created at Port ${Port}`);
})