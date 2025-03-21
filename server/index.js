import express from "express";
import { connect } from "./config/db.js";
import dotenv from "dotenv";
import productRouter from "./routes/productRoute.js";

const app = express();

const port = process.env.port || 4040;
dotenv.config()
// http://localhost:4040/api/product/create


app.use(express.json());
// api routees
app.use("/api/product", productRouter)



app.get("/",(req,res)=>{
    res.status(200).json({success:true, message:"server is live"})
})


app.use((req,res)=>{
    res.status(404).json({success:false,errMsg:"route not found"})
})

connect()
.then( ( )=>{
    try {
        app.listen(port,()=>{
            console.log(`http://localhost:${port}`);
            
        })
    }catch (error) {
        console.log("can not connect to server" + error.message);
        
    }
})
.catch((error)=>{
    console.log("invalid database connection" + error.message);
    
})

