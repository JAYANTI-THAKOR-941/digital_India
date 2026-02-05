import { users } from "../data/userData.js";

export const getAllUsers = (req,res)=>{
    try{
        res.status(200).json(users)
    }
    catch(error){
        res.status(501).json({message:message.error});
    }
}


export const renderUsers = (req,res)=>{
    res.render('index',{users})
}

export const addUser = (req,res)=>{
    try{
        let {name,email,role} = req.body;
        
        const newUser = ({
            id:users.length+1,
            name:name,
            email:email,
            role:role
        })
        users.push(newUser);
        res.status(201).json(users);
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


export const deleteUser = (req,res)=>{
    let id = Number(req.params.id);
    let user = users.findIndex(u=>u.id == id);

    if(user == -1){
        res.status(401).json({message:"user not found.!!"});
    }

    users.splice(user,1);
    res.redirect('/api/user/all')

}