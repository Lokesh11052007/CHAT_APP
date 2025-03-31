import express from "express";
import { protectRoutes } from "../middleware/auth.middleware.js";
import { getUsersForSidebar } from "../controller/message.controller.js"

const router = express.Router();

router.get("/users", protectRoutes, getUsersForSidebar)

export default router;