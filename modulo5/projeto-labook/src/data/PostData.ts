import Post from "../model/Post";
import { responseFindPost } from "../types/responseFindPost";
import BaseDatabase from "./BaseDatabase";

class PostData extends BaseDatabase{
    protected TABLE_NAME = "labook_posts";

    public insertPost = async (post: Post): Promise<void> => {
        try {
            await this.connection(this.TABLE_NAME)
                .insert(post);
        } 
        catch (error: any) {
            throw new Error(error.sqlMessage  || error.message);
        }
    };

    public findPostId = async (id: string): Promise<responseFindPost> => {
        try {
            const result: responseFindPost[] = await this.connection(this.TABLE_NAME)
            .select("*")
            .where({id});
            
            return result[0];
        } 
        catch (error: any) {
            throw new Error(error.sqlMessage  || error.message);
        }
    };
};

export default PostData;