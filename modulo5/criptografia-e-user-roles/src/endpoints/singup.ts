import { Request, Response } from "express";
import { createUser } from "../data/createUser";
import { generateId } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import HashManager from "../services/HashManager";

const singup = async (req: Request, res: Response) => {
    try {
        const userData = {
          email: req.body.email,
          password: req.body.password,
          role: req.body.role
        };

        const id = generateId();
    
        const hashPassword = await new HashManager().generateHash(userData.password);
    
        await createUser(id, userData.email, hashPassword, userData.role);
    
        const token = generateToken({
          id,
          role: userData.role,
        });
    
        res.status(200).send({
          token,
        });
      } 
      catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
};

export default singup; 