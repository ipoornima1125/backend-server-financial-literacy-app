import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    id: Number,
    title: String,
    image: String,
    description: String,
    quiz: String,
    duration: Number,
    link:String
})

const Courses = mongoose.model("courses", courseSchema)
export default Courses;