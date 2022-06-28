import { Request, Response } from "express";
import { getUser } from "../data/getUser";
import { generateToken } from "../services/generateToken";
import HashManager from "../services/HashManager";

const login = async (req: Request, res: Response) => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        };

        const user = await getUser(userData.email);

        const compareResult = await new HashManager().compareHash(
            userData.password,
            user.password
        );

        if (!compareResult) {
            throw new Error("Invalid password");
        }

        const token = generateToken({
            id: user.id,
            role: userData.role, 
        });

        res.status(200).send({token});
        
      } catch (err) {
        res.status(400).send({
            message: err.message,
        });
      }
};

export default login; 