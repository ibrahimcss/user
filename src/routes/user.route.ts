import {Router} from "express";
import UserController from "../controller/UserController";
import {checkJwt} from "../middlewares/checkJwt";
import {checkRole} from "../middlewares/checkRole";

const router = Router();

//Get All User
router.get("/",[checkJwt, checkRole(["admin"])],UserController.listAll);
router.post("/", [checkJwt],  UserController.newUser);
router.get(
    "/:id",
    [checkJwt, checkRole(["admin"])],
    UserController.getOneById
);
router.patch(
    "/:id",
    [checkJwt, checkRole(["admin"])],
    UserController.editUser
);

//Delete one user
router.delete(
    "/:id",
    [checkJwt, checkRole(["admin"])],
    UserController.deleteUser
);

export default router;
