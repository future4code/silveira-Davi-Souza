import { Request, Response } from "express";
import { createUser } from "../data/createUser";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";

const singup = async (req: Request, res: Response) => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        };

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
        };
           
        const email: string = req.body.email;
        const password: string = req.body.password;
        const id = generateId();

        await createUser(id, email, password);

        const token = generateToken( { id } );

        res.status(200).send({token});
    } 
    catch (error: any) {
        res.status(400).send({
          message: error.message,
        });
    };
};

export default singup;