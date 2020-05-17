import {Request, Response} from "express";
import {getRepository} from "typeorm";
import {Post} from "../entity/Post";

import validate = WebAssembly.validate;



class PostController {
    static listAll = async (req: Request, res: Response) => {
        //Get users from database
        const postRepository = getRepository(Post);
        const posts = await postRepository.find({
            select: ["id","title","content","createdAt"] //We dont want to send the passwords on response
        });

        //Send the users object
        res.send(posts);
    };

    static newPost = async (req: Request, res: Response) => {
        //Get parameters from the body
        let {title,content} = req.body;
        let post = new Post();
        post.title=title;
        post.content=content;

        console.log("Req Post: "+req.body+" c:"+req.get("title"));



        const postRepository = getRepository(Post);
        try {
            await postRepository.save(post);
        } catch (e) {
            res.status(409).send("post id already in");
            return;
        }

        //If all ok, send 201 response
        res.status(201).send("post created");
    };
}
export default PostController;
