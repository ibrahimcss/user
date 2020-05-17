import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import LoginController from "../controller/LoginController";

const router = Router();
//Login route
router.post("/login", LoginController.login);

//Change my password
router.post("/change-password", [checkJwt], LoginController.changePassword);

export default router;
