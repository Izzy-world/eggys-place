import PRODUCT from "../models/productModel.js";

// c -- for create in CRUD

export const createproduct = async (req,res)=>{
    const {title,image,description,rating,price,category,duration} = req.body;
    if(!title || !image || !description || !rating || !price || !category || !duration){
        res.status(400).json({success:false,errMsg:"all fields are required"})
        return 
    }
    try {
        const product = await PRODUCT.create(req.body);
        res.status(200).json({success:true,message:"product created successfully",product})
    } catch (error) {
        res.status(500).json(error.message)
    }
}