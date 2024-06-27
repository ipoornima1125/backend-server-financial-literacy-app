import mongoose from 'mongoose'
import jwt from 'jsonwebtoken';
const userSchema= mongoose.Schema(
    {
         email:{
            type:String,
            required:true,
            unique:true
         },
         password:{
            type:String,
            required:true
         }
    }
)

userSchema.methods.generateToken=async function (){
   try{
      return jwt.sign({
         email:this.email
      },

      process.env.JWT_SECRET_KEY,{
         expiresIn:"30d",
      }
   )

   }
   catch(error){
      console.log("Errror:",error);
   }
}

const User=mongoose.model("User",userSchema);
export default User;