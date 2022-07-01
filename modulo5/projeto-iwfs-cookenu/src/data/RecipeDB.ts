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
        try{
            const result = await connection("COOKENU_RECIPES")
                .select("*")
                .where({id});

            return result[0] && Recipe.toRecipeMode(result[0]);
        }
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        };
    };

    public async getUserFeed (id: string): Promise<any[]> {
        try{
            const result = await connection
                .raw(`
                    SELECT rc.id, rc.title, rc.description, rc.creation_date as createdAt, rc.user_id as userId, u.name as userName 
                    FROM COOKENU_RECIPES rc 
                    INNER JOIN COOKENU_FOLLOWERS f ON f.creator_id = rc.user_id
                    INNER JOIN COOKENU_USERS u ON u.id = rc.user_id
                    WHERE f.follower_id = "${id}";
                `);

            if(result[0].length < 1){
                throw new Error("Usuário não está seguindo ninguém.");
            };

            return result[0];
        }
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        };
    };
};

export default RecipeDB;