import { Request, Response } from "express";
import { getUser } from "../data/getUser";
import { generateToken } from "../services/generateToken";

const login = async (req: Request, res: Response) => {
    try {

        console.log("entrei")

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        };

        const userData = {
            email: req.body.email,
            password: req.body.password,
        };

        const user = await getUser(userData.email);

        if (user.password !== userData.password) {
            throw new Error("Invalid password");
        };

        const token = generateToken({
            id: user.id,
        });

        console.log("token: ", token);

        res.status(200).send( { token } );
    } 
    catch (error: any) {
        res.status(400).send({
            message: error.message
        });
    };
};

export default login;