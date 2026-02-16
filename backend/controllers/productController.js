import Product from "../models/Product.js";

export const createProduct = async(req,res)=>{
    try{
        let product = await Product.create(req.body);
        res.status(201).json({message:"Product created successfully.!!",product});
    }
    catch(error){
        res.status(501).json({message:"Server error!!"})
    }
}


export const updateProduct = async(req,res)=>{
    try{
        await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json({message:"Product updated successfully.!!"});
    }
    catch(error){
        res.status(501).json({message:"Server error!!"})
    }
}

export const deleteProduct = async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(201).json({message:"Product Deleted successfully.!!"});
    }
    catch(error){
        res.status(501).json({message:"Server error!!"})
    }

}
export const getAllProducts = async(req,res)=>{
    try{
        let products = await Product.find();
        res.status(201).json(products);
    }
    catch(error){
        res.status(501).json({message:"Server error!!"})
    }
}

export const getProductById = async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id);
        if(!product){
            res.status(400).json({message:"Product Not Found.!!!"});
        }
        res.status(201).json({product});
    }
    catch(error){
        res.status(501).json({message:"Server error!!"})
    }
}

