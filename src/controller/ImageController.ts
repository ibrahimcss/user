
import {Request, Response} from "express";
import {Image} from "../entity/Image";
import {getRepository} from "typeorm";
import {User} from "../entity/User";

interface MulterRequest extends Request {
    file: any;
}

class ImageController {



    static savePhoto= async (req: MulterRequest , res: Response) =>{
        const url = req.protocol + '://' + req.get('host');
   let image=new Image();
  const imageJson=JSON.parse(req.body.json);
  image.post=imageJson.post;
  image.photoDetail=imageJson.photoDetail;
  image.name=imageJson.name;
  image.photoUrl=url+"/public/"+req.file.originalname;

   const imageRepository=getRepository(Image);
   imageRepository.save(image);


res.status(req.body);

    };
    static listAll = async (req: Request, res: Response) => {
        //Get users from database
        const imageRepository = getRepository(Image);
        const images = await imageRepository.find({
            select: ["name", "photoUrl"] //We dont want to send the passwords on response
        });

        //Send the users object
        res.send(images);
    };

}
export default ImageController;
