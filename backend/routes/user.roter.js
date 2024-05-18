import express  from "express";
import protectRoutes from "../middlewares/protectRoutes.js";
import {getUsersForSidebar}  from "../controllers/user.controller.js";
const router = express.Router();

router.get("/" , protectRoutes, getUsersForSidebar);

export default router;