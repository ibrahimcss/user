import {Router} from "express";
import UserController from "../controller/UserController";
import {checkJwt} from "../middlewares/checkJwt";
import {checkRole} from "../middlewares/checkRole";

const router = Router();

//Get All User
router.get("/",[checkJwt, checkRole(["admin"])],UserController.listAll);
router.post("/", [checkJwt],  UserController.newUser);
export default router;
