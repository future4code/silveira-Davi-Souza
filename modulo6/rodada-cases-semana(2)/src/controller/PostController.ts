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
            const { id, name, tags } = req.body;

            const inputPost: postInputDTO = {
                id,
                name,
                tags,
                token
            };

            await this.postBusiness.createNewProduct(inputPost);

            res.status(201).send({message: "Post created successfully"});
        } 
        catch (error: any) {
            res.status(500).send({message: error.message});
        };
    };

    public findProduct = async ( req: Request, res: Response ) => {
        try {
            const token = req.headers.authorization as string;
            const key = req.params.key;

            const input: findPostDTO = {
                token,
                key
            };

            const post = await this.postBusiness.findProduct(input);

            res.status(200).send(post);
        } 
        catch (error: any) {
            res.status(500).send({message: error.message});
        };
    };
};

export default PostController;