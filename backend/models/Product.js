import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String
    }
})

const Product = mongoose.model('Product',productSchema);

export default Product;