import User from "../models/User.js";

export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const exitingUser = await User.findOne({ email });

        if (exitingUser) {
            res.status(400).json({ message: "User is already Exits.!" });
        }

         const user = await User.create({
            username, email, password
        })

        res.status(201).json({ message: "User register successfully.",user });
    }
    catch (error) {
        res.status(501).json({message:"Internal server error.!!"});
    }
}

export const loginUser = async(req,res)=>{
    try{
        const{email,password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            res.status(400).json({message:"User not found.!!"});
        }

        if(password !== user.password){
            res.status(400).json({message:"Invalid password and email.!!"});
        }

        res.status(201).json({message:"Login Successfully.!!"});
    }
    catch (error) {
        res.status(501).json({message:"Internal server error.!!"});
    }
}