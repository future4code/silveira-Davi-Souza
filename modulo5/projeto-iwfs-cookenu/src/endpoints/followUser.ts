import { Request, Response } from "express";
import { UserDB } from "../data/UserDB";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

const followUser = async ( req: Request ,res: Response ): Promise<any> => {
    try {
        const token = req.headers.authorization as string;
        const userToFollowId = req.body.userToFollowId;

        const tokenData = new Authenticator().getTokenData(token);
        const userDB = new UserDB();
        const user = await userDB.findUserByEmail(tokenData.email);

        if(!token || !userToFollowId){
            res.status(400).send("Insira corretamente as informações. 'userToFollowId' ou 'Authorization'.");
        };

        if(!user){
            res.status(401).send("Invalid Token.");
        };

        if(tokenData.id === userToFollowId){
            res.status(400).send("Usuário não pode seguir a si próprio.");
        };

        const id = new GenerateId().generate();

        await userDB.followUserId(id, userToFollowId, tokenData.id);

        res.status(201).send({message: "Followed successfully."});

    } 
    catch (error) {
        res.status(400).send(error.message);
    };
};

export default followUser;