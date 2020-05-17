import { Router, Request, Response } from "express";
import user from "./user.route";
import login from "./login.route";
import post from "./post.route";
const routes = Router();

routes.use("/user", user);
routes.use("/login",login);
routes.use("/post",post);

export default routes;
