import Contact from '../model/contact.model.js';

const contactUs=async(req,res)=>{
    try{
        const{name,email,subject,message}=req.body;
        if(!req.body){
            return res.status(400).json({message:"please fill all the required details"});
        }

        const createdContact= new Contact({
            name,
            email,
            subject,
            message
        });
        await createdContact.save();
        return res.status(200).json({message:"Message sent successfully"});
    }

    catch(error){
          console.log("Error:",error);
          return res.status(500).json({message:"Internal Server Error"});
    }
}

export default contactUs;


