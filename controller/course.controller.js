import Courses from '../model/courses.model.js';

const getCourse =async(req,res)=>{
    try{
        const course=await Courses.find();
        res.status(200).json(course);
    }
    catch(error){
      console.log("Error:",error);
      res.status(500).json(error);
    }

}


export default getCourse;