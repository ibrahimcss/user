import {Router} from "express";
import {checkJwt} from "../middlewares/checkJwt";
import {checkRole} from "../middlewares/checkRole";
import PostController from "../controller/PostController";

const router = Router();

//Get All User
router.get("/",PostController.listAll);
router.post("/",PostController.newPost);

export default router;
