import { Router } from "express";
import { authorizationController } from "../controllers";

const router = Router();

router.post("/", authorizationController.signIn);
router.put("/", authorizationController.signUp);

export default router;
