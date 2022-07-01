import { Request, Response } from "express";
import RecipeDB from "../data/RecipeDB";
import { UserDB } from "../data/UserDB";
import { Authenticator } from "../services/Authenticator";

const getFeedRecipes = async ( req: Request ,res: Response ): Promise<any> => {
    try {
        const token = req.headers.authorization as string;

        const tokenData = new Authenticator().getTokenData(token);
        const userDB = new UserDB();
        const user = await userDB.findUserByEmail(tokenData.email);

        if(!token){
            res.status(400).send("Insira corretamente a informação. 'Authorization'.");
        };

        if(!user){
            res.status(401).send("Invalid Token.");
        };

        const feed = await new RecipeDB().getUserFeed(tokenData.id);

        res.status(200).send({recipes: feed});
    } 
    catch (error) {
        res.status(400).send(error.message);
    };
};

export default getFeedRecipes;