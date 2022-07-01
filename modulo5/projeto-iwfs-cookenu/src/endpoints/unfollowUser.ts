import { Request, Response } from "express";
import { UserDB } from "../data/UserDB";
import { Authenticator } from "../services/Authenticator";

const unfollowUser = async ( req: Request, res: Response ): Promise<any> => {
    try {
        const token = req.headers.authorization as string;
        const userToUnfollowId = req.body.userToUnfollowId;

        const tokenData = new Authenticator().getTokenData(token);
        const userDB = new UserDB();
        const user = await userDB.findUserByEmail(tokenData.email);

        if(!token || !userToUnfollowId){
            res.status(400).send("Insira corretamente as informações. 'userToUnfollowId' ou 'Authorization'.");
        };

        if(!user){
            res.status(401).send("Invalid Token.");
        };

        if(tokenData.id === userToUnfollowId){
            res.status(400).send("Id do usuário não pode ser o mesmo do usuário a ser deixado de seguir.");
        };

        await userDB.unfollowUserId(userToUnfollowId);

        res.status(201).send({message: "Unfollowed successfully."});
    } 
    catch (error) {
        res.status(400).send(error.message);
    };
};

export default unfollowUser;