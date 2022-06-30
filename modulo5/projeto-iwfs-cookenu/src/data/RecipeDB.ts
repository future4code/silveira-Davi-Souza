import Recipe from "../entities/Recipe";
import connection from "./connection";

class RecipeDB {
    public async recipe (recipe: Recipe): Promise<void> {
        try {
            await connection("COOKENU_RECIPES")
                .insert({
                    "id": recipe.getId(),
                    "title": recipe.getTitle(),
                    "description": recipe.getDescription(),
                    "creation_date": recipe.getCreationDate(),
                    "user_id": recipe.getUserId()
                });
        } 
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        };
    };

    public async getRecipeDB (id: string): Promise<Recipe> {
        const result = await connection("COOKENU_RECIPES")
            .select("*")
            .where({id});

        return result[0] && Recipe.toRecipeMode(result[0]);
    };

};

export default RecipeDB;