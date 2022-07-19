import { Request, Response } from "express";
import RecipeDB from "../data/RecipeDB";
import { UserDB } from "../data/UserDB";
import Recipe from "../entities/Recipe";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

const createRecipe = async ( req:Request, res: Response ): Promise<any> => {
    try {
        const token = req.headers.authorization as string;
        const { title, description } = req.body;

        if(!title || !description || !token){
            res.status(422).send("Insira corretamente as informações. 'title', 'description' ou 'Authorization'");
        };

        const tokenData = new Authenticator().getTokenData(token);
        const user = await new UserDB().findUserByEmail(tokenData.email);

        if(!user){
            res.status(401).send("Invalid Token.");
        };

        const id = new GenerateId().generate();
        const date = new Date();

        const recipe = new Recipe(id, title, description, date, tokenData.id);

        await new RecipeDB().recipe(recipe);

        res.status(201).send({message: "Recipe created successfully."});
    } 
    catch (error) {
        res.status(400).send(error.message);
    };
};

export default createRecipe;