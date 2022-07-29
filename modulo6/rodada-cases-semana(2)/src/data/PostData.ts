import Product from "../model/Product";
import { responseFindPost } from "../types/responseFindPost";
import BaseDatabase from "./BaseDatabase";
import IdGenerator from "../services/IdGenerator";

class PostData extends BaseDatabase{
    protected TABLE_NAME = "amaro_products";
    protected TABLE_TAGS = "tags"
    protected TABLE_PT   = "products_tags"

    public insertProduct = async (product: Product): Promise<void> => {
        try {
            const tags: string[] = product.getTags();
            const idGenerator = new IdGenerator();

            await this.connection(this.TABLE_NAME)
                .insert({
                    "id": product.getId(),
                    "name": product.getName(),
                    "author_id": product.getAuthorId()
                });

            for (let i = 0; i < tags.length; i++) {
                let tag = await this.connection(this.TABLE_TAGS).select("name").where("name", tags[i]);
                
                if(tag.length === 0){
                    await this.connection(this.TABLE_TAGS)
                        .insert({
                            "id": idGenerator.generateId(),
                            "name": tags[i]
                        });
                };

                let tagId = await this.connection(this.TABLE_TAGS)
                    .select("id")
                    .where("name", tags[i]);

                await this.connection(this.TABLE_PT)
                    .insert({
                        "id": idGenerator.generateId(),
                        "product_id": product.getId(),
                        "tags_id": tagId[0].id
                    });
            };
        } 
        catch (error: any) {
            throw new Error(error.sqlMessage  || error.message);
        }
    };

    public findProduct = async (input: string, id: string): Promise<responseFindPost> => {
        try {
            let tag;
            let tags;

            const result: responseFindPost[] = await this.connection(this.TABLE_NAME)
            .select("*")
            .where({ id: input })
            .orWhere("name", "LIKE", input);

            if(result.length === 0){
                tag = await this.connection(this.TABLE_TAGS)
                    .select("*")
                    .where({name: input});
                
                const results: responseFindPost[] = await this.connection.raw(`
                    SELECT a.id, a.name, a.author_id FROM amaro_products as a
                    INNER JOIN products_tags as p 
                    WHERE "${tag[0].id}" = p.tags_id
                    AND "${id}" = a.author_id;
                `);

                tags = await this.connection.raw(`
                    SELECT t.name FROM tags as t
                    INNER JOIN products_tags as p
                    WHERE "${results[0].id}" = p.product_id
                    AND p.tags_id = t.id;
                `);

                console.log("tags",tags[0])

                return (results[0] && tags[0]) && Product.toProductMode(results[0], tags[0]);
            };

            tags = await this.connection.raw(`
                    SELECT t.name FROM tags as t
                    INNER JOIN products_tags as p
                    WHERE "${result[0].id}" = p.product_id
                    AND p.tags_id = t.id;
                `);

            return (result[0] && tags[0]) && Product.toProductMode(result[0], tags[0]);
        } 
        catch (error: any) {
            throw new Error(error.sqlMessage  || error.message);
        }
    };
};

export default PostData;