import getUserProfile from "../controller/profile.controller.js";

import express from 'express';
const router=express.Router();
router.get("/",getUserProfile);

export default router;