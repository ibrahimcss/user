import {Router} from "express";
import ImageController from "../controller/ImageController";
const router = Router();
const multer = require('multer');
const upload = multer({

});



router.post("/save",upload.single("photo"),ImageController.savePhoto);
export default router;
