export enum POSTENUM {
    NORMAL = "normal",
    EVENT = "event"
};

export type postInputDTO = {
    photo: string,
    description: string,
    type: string,
    token: string
};