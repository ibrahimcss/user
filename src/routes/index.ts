import { Router } from "express";
import user from "./user.route";
import login from "./login.route";
import post from "./post.route";
import image from "./image.route";
const routes = Router();



routes.use("/user", user);
routes.use("/login",login);
routes.use("/post",post);
routes.use("/image",image);



export default routes;
