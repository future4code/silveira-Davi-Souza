import { Request, Response } from "express";
import { UserDB } from "../data/UserDB";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/generateId";
import { HashManager } from "../services/HashMaganer";

export const signup =async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password){
            res.status(422).send("Insira corretamente as informações. 'name', 'email' ou 'password'");
        };

        const userDB = new UserDB();
        const user = await userDB.findUserByEmail(email);

        if(user){
            res.status(409).send("Este e-mail já está cadastrado.");
        };

        const id = new GenerateId().generate();

        const hashPassword = await new HashManager().hash(password);

        const newUser = new User(id, name, email, hashPassword);

        await userDB.createUser(newUser);

        const token = new Authenticator().generateToken({id, email});

        res.status(200).send({message: "Usuário criado com sucesso.", token: token});
    } 
    catch (error) {
        res.status(400).send(error.message);
    };
};