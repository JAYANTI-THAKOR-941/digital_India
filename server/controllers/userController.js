import { users } from "../data/userData.js";

export const getAllUsers = (req,res)=>{
    try{
        res.status(200).json(users)
    }
    catch(error){
        res.status(501).json({message:message.error});
    }
}

export const getUserById = (req,res)=>{
    try{
        let id = Number(req.params.id);
        let user = users.find(u=>u.id == id);
        if(!user){
            res.status(401).json({message:"user not found.!!"});
        }
        res.status(200).json(user);
    }
    catch(error){
        res.status(501).json({message:message.error});
    }
}
