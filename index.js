
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import courseRoute from './route/course.route.js';
import userRoute from './route/user.route.js';
import contactRoute from './route/contact.route.js';
import profileRoute from './route/profile.route.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000
const URI = process.env.MongoDBURI;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


app.use("/course", courseRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);
app.use("/profile",profileRoute);
app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`);
});
