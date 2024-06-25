import express from 'express';
import getCourse from '../controller/course.controller.js';
const router = express.Router()
router.get("/", getCourse)
export default router;