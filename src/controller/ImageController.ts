
import {Request, Response} from "express";
import {Image} from "../entity/Image";
import {getRepository} from "typeorm";
interface MulterRequest extends Request {
    file: any;
}

class ImageController {



    static savePhoto= async (req: MulterRequest , res: Response) =>{
   let image=new Image();

        console.log("req body",req.body);
        console.log("req photo",req.file);
        console.log("req json",req.body.json);
        console.log("req json name",req.body.json.name);
/*        image.photo=req.file;
   const imageRepository=getRepository(Image);
   imageRepository.save(image);*/


res.status(200);

    };
}
export default ImageController;
