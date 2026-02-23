import Product from "../models/Product.js";

export const createProduct = async(req,res)=>{
    try{
        await Product.create(req.body);
        res.status(201).json({message:"Product added successfully.!!"});
    }
    catch(error){
        res.status(501).json({message:"Internal server error.!!",error});
    }
}

export const getAllProducts = async(req,res)=>{
    try{
        let products = await Product.find();
        res.status(200).json({products});
    }
    catch(error){
        res.status(501).json({message:"Internal server error.!!",error});
    }
}

export const getProductById = async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id);
        res.status(200).json({product});
    }
     catch(error){
        res.status(501).json({message:"Internal server error.!!",error});
    }
}

