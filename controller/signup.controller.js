import User from '../model/user.model.js';
import bcryptjs from 'bcryptjs';

const signup=async(req,res)=>{
    try{
    const{email,password}=req.body;
       const user=await User.findOne({email})
       if(user){
        return res.status(400).json({message:"user already exists"});
       }
       const hashPassword= await bcryptjs.hash(password,10);

       const createdUser= new User({
            email,
            password:hashPassword
       })

       await createdUser.save()
       res.status(201).json({
        message:"Account created successfully"
       })
    }   
    catch(error){
         console.log("Error:",error);
         res.status(500).json({message:"Internal server error"});
    }


}

export default signup;
