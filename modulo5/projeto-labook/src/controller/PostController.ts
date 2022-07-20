import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { findPostDTO } from "../types/findPostDTO";
import { postInputDTO } from "../types/postInputDTO";

class PostController {
    constructor(
        private postBusiness: PostBusiness
    ){};

    public createPost = async ( req: Request, res: Response ): Promise<void> => {
        try {
            const token = req.headers.authorization as string;
            const { photo, description, type } = req.body;

            const inputPost: postInputDTO = {
                photo,
                description,
                type,
                token
            };

            await this.postBusiness.createNewPost(inputPost);

            res.status(201).send({message: "Post created successfully"});
        } 
        catch (error: any) {
            res.status(500).send({message: error.message});
        };
    };

    public findPostById = async ( req: Request, res: Response ) => {
        try {
            const token = req.headers.authorization as string;
            const id = req.params.id;

            const input: findPostDTO = {
                token,
                id
            };

            const post = await this.postBusiness.findPost(input);

            res.status(200).send(post);
        } 
        catch (error: any) {
            res.status(500).send({message: error.message});
        };
    };
};

export default PostController;