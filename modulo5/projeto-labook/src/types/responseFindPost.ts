import { POSTENUM } from "./postInputDTO";

export type responseFindPost = {
    id: string,
    photo: string,
    description: string,
    type: POSTENUM,
};