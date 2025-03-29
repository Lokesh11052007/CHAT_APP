import express from "express";
import { checkMath, login, logout, signup, updateProfile } from "../controller/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", protect, updateProfile)

router.get("/check", protect, checkMath)

export default router;

