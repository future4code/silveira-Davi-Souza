import PostData from "../data/PostData";
import UserData from "../data/UserData";
import Post from "../model/Product";
import Authenticator from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";
import { findPostDTO } from "../types/findPostDTO";
import { postInputDTO } from "../types/postInputDTO";
import { responseFindPost } from "../types/responseFindPost";

class PostBusiness {
    constructor(
        private authenticator: Authenticator,
        private userData: UserData,
        private idGenerator: IdGenerator,
        private postData: PostData
    ){};

    public createNewProduct = async (postInput: postInputDTO): Promise<void> => {
        const { id, name, tags, token } = postInput;

        if( !id || !name || !tags || !token ){
            throw new Error("Invalid Inputs");
        };

        const tokenData = this.authenticator.getTokenData(token);
        const isRegistered = await this.userData.findByEmail(tokenData.email);

        if(!isRegistered){
            throw new Error("Invalid Token");
        };

        const product = new Post( id, name, tags, tokenData.id );

        await this.postData.insertProduct(product);
    };

    public findProduct = async (input: findPostDTO): Promise<responseFindPost> => {
        const { token, key } = input;

        if( !token || !key ){
            throw new Error("Invalid Inputs");
        };

        const tokenData = this.authenticator.getTokenData(token);
        const isRegistered = await this.userData.findByEmail(tokenData.email);

        if(!isRegistered){
            throw new Error("Invalid Token");
        };

        const product = await this.postData.findProduct(key, isRegistered.getId());

        return product;
    };
};

export default PostBusiness;