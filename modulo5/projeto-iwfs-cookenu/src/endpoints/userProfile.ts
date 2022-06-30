import { Request, Response } from "express";
import { UserDB } from "../data/UserDB";
import { Authenticator } from "../services/Authenticator";

const userProfile = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        if(!token){
            res.status(422).send("Insira corretamente a informação. 'token'");
        };

        const tokenData = new Authenticator().getTokenData(token);

        const user = await new UserDB().findUserByEmail(tokenData.email);

        res.status(200).send({id: user.getId(), name: user.getName(), email: user.getEmail()});
    } 
    catch (error) {
        res.status(400).send(error.message);
    };
};

export default userProfile;