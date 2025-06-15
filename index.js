import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import Product from "./models/product.model.js"
dotenv.config()


const app = express()


app.use(express.json());

app.listen(5000,()=>{
    console.log("Server running on port 5000");
})


app.get("/",(req,res)=>{
    res.send("Hello from Node.js");
})

// Create
app.post("/api/product",async (req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


// Get
app.get("/api/product",async (req,res)=>{
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


// update
app.put("/api/product/:id",async (req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            res.status(500).json({message:"Product not found"})
        }
        res.status(200).json("product updated successfully")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


// delete
app.delete("/api/product/:id",async (req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            res.status(500).json({message:"Product not found"})
        }
        res.status(200).json("product deleted sucessfully")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})





// connect with mongodb
const mongo_url = process.env.DATABASE_URL
console.log(mongo_url);
const db = mongoose.connect(mongo_url)
.then(()=>{
    console.log("Database connected sucessfully");
}).catch(()=>{
    console.log("Connection Failed");
})