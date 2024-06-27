import bcryptjs from 'bcryptjs';
import User from '../model/user.model.js';

const login =async(req,res)=>{
       
    try{
        if (!req.body) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        
        const {email,password}=req.body;
        const userExist= await User.findOne({email});
        const correct= await bcryptjs.compare(password,userExist.password);
        if(!userExist||!correct){
            return res.status(401);
        }
        else{
            return res.status(200).json(
                {message:'User logged in successfully',
                token:await userExist.generateToken(),
                })
        }

    }
   catch(error){
       console.log("Error:",error);
      res.status(500).json({message:"Internal Server Error"});
   }
}



export default login;