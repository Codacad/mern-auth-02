import { Router } from "express";
import {
  getUsers,
  protect,
  register,
  signin,
} from "../controllers/userController.js";
const router = Router();

router.get("/", getUsers);
router.post("/register", register);
router.post("/signin", signin);
router.get("/protected", protect);

export default router;
