import { Request, Response } from "express";
import RecipeDB from "../data/RecipeDB";
import { UserDB } from "../data/UserDB";
import { Authenticator } from "../services/Authenticator";

const getRecipe = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;
        const recipeId = req.params.id;

        if(!token || !recipeId){
            res.status(422).send("Insira corretamente as informações. 'id' ou 'Authorization'");
        };

        const tokenData = new Authenticator().getTokenData(token);
        const user = await new UserDB().findUserByEmail(tokenData.email);

        if(!user){
            res.status(401).send("Invalid Token.");
        };

        const recipe = await new RecipeDB().getRecipeDB(recipeId);

        const auxData = recipe.getCreationDate()

        const data: string = `${auxData.getDate()}/${auxData.getMonth() + 1}/${auxData.getFullYear()}`;

        res.status(200).send({
            id: recipe.getId(), 
            title: recipe.getTitle(), 
            description: recipe.getDescription(), 
            createdAt: data
        });
    } 
    catch (error) {
        res.status(400).send(error.message);
    }
};

export default getRecipe;