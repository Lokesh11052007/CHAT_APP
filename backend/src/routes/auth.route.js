import express from "express";
import { checkMath, login, logout, signup, updateProfile } from "../controller/auth.controller.js";
import { protectRoutes } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", protectRoutes, updateProfile)

router.get("/check", protectRoutes, checkMath)

export default router; 

