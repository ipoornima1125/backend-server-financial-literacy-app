import getUserProfile from "../controller/profile.controller.js";
import authenticateToken from "../middleware/authenticate.token.js";
import express from 'express';
const router=express.Router();
router.get("/",authenticateToken,getUserProfile);

export default router;