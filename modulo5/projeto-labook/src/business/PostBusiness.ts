import PostData from "../data/PostData";
import UserData from "../data/UserData";
import Post from "../model/Post";
import Authenticator from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";
import { findPostDTO } from "../types/findPostDTO";
import { POSTENUM, postInputDTO } from "../types/postInputDTO";
import { responseFindPost } from "../types/responseFindPost";

class PostBusiness {
    constructor(
        private authenticator: Authenticator,
        private userData: UserData,
        private idGenerator: IdGenerator,
        private postData: PostData
    ){};

    public createNewPost = async (postInput: postInputDTO): Promise<void> => {
        const { photo, description, type, token } = postInput;
        let newType: POSTENUM;

        if( !photo || !description || !type || !token ){
            throw new Error("Invalid Inputs");
        };

        const tokenData = this.authenticator.getTokenData(token);
        const isRegistered = await this.userData.findByEmail(tokenData.email);

        if(!isRegistered){
            throw new Error("Invalid Token");
        };

        switch (type) {
            case "normal":
                newType = POSTENUM.NORMAL;
                break;
            case "event":
                newType = POSTENUM.EVENT;
                break;
            default:
                throw new Error("type must be 'normal' or 'event'");
        };

        const id = this.idGenerator.generateId();

        const post = new Post( id, photo, description, newType, tokenData.id );

        await this.postData.insertPost(post);
    };

    public findPost = async (input: findPostDTO): Promise<responseFindPost> => {
        const { token, id } = input;

        if( !token || !id ){
            throw new Error("Invalid Inputs");
        };

        const tokenData = this.authenticator.getTokenData(token);
        const isRegistered = await this.userData.findByEmail(tokenData.email);

        if(!isRegistered){
            throw new Error("Invalid Token");
        };

        const post = await this.postData.findPostId(id);

        return post;
    };
};

export default PostBusiness;