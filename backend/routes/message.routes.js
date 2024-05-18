import express from "express";
import protectRoutes from "../middlewares/protectRoutes.js"
import  { getMessage, sendMessage }  from "../controllers/message.controller.js";
const router = express.Router();

router.get("/:id" , protectRoutes , getMessage);
router.post("/send/:id", protectRoutes ,sendMessage);

export default router;