import { POSTENUM } from "../types/postInputDTO";

class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: POSTENUM,
        private author_id: string
    ){};
};

export default Post