import {Router} from "express";
import ImageController from "../controller/ImageController";
const router = Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public');
    },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});
const upload = multer({ storage: storage });


router.post("/save",upload.single("photo"),ImageController.savePhoto);
router.get("/list",ImageController.listAll);
export default router;
