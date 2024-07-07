import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

router.post('/send-to-gemini', async (req, res) => {
  const courseDescription = req.body.courseDescription;

  if (!courseDescription) {
    return res.status(400).json({ error: 'courseDescription is required' });
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `Provide brief information about: ${courseDescription}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    res.json({ text });
  } catch (error) {
    console.error('Error sending data to Gemini API:', error);
    res.status(500).json({ error: 'Failed to communicate with Gemini API' });
  }
});

export default router;
