import express from 'express';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.API_KEY,
})

router.post('/send-to-openai', async (req, res) => {
  const { questions } = req.body;

  if (!questions || !Array.isArray(questions) || questions.length === 0) {
    return res.status(400).json({ error: 'questions array is required' });
  }

  try {
    const responses = [];

    for (const question of questions) {
      const prompt = `Tell me briefly in not more than 10 lines about question: ${question}`;
      const response = await openai.chat.completions.create({
        model: 'openchat/openchat-7b:free',
        messages: [
          {role:'system', content:'You give constructive and useful feedback to people'},
          {role: 'user', content: prompt} 
        ],
        max_tokens: 150,
      });

      responses.push({ question, text: response.choices[0].message.content.trim() });
    }

    res.json({ responses });
  } catch (error) {
    console.error('Error sending data to OpenAI API:', error);
    res.status(500).json({ error: 'Failed to communicate with OpenAI API' });
  }
});

export default router;
