import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

router.post('/send-to-gemini', async (req, res) => {
  const { questions } = req.body;

  if (!questions || !Array.isArray(questions) || questions.length === 0) {
    return res.status(400).json({ error: 'questions array is required' });
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const responses = [];

    for (const question of questions) {
      const prompt = `Tell me briefly in not more than 10 lines about question: ${question}`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      responses.push({ question, text });
    }

    res.json({ responses });
  } catch (error) {
    console.error('Error sending data to Gemini API:', error);
    res.status(500).json({ error: 'Failed to communicate with Gemini API' });
  }
});

export default router;
