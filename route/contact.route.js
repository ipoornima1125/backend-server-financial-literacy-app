import contactUs from '../controller/contact.controller.js';

import express from 'express';
const router=express.Router();
router.post("/",contactUs);
export default router;