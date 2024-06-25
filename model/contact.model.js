import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
        name: {
            type:String,
            required:true
        },
        email: {
            type:String,
            required:true
        },
        subject: {
            type:String,
            required:true
        },
        message: {
            type:String,
            required:true
        },
})

const Contact = mongoose.model("contacts", contactSchema)
export default Contact;