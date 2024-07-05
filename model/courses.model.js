import mongoose from 'mongoose';
const AnswerOptionSchema = new mongoose.Schema({
    answerText: String,
    isCorrect: Boolean
  });
  
  const QuizQuestionSchema = new mongoose.Schema({
    questionText: String,
    answerOptions: [AnswerOptionSchema],
  });

const courseSchema = mongoose.Schema({
    id: Number,
    title: String,
    image: String,
    description: String,
    quiz: String,
    duration: Number,
    link:String,
    quizQuestions:[QuizQuestionSchema],
})

const Courses = mongoose.model("courses", courseSchema)
export default Courses;