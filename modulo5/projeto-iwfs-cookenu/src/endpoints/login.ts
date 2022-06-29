import { Request, Response } from "express";
import { UserDB } from "../data/UserDB";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashMaganer";

export const login =async (req: Request, res: Response): Promise<any> => {
    try {
        const { email, password } = req.body;

        if(!email || !password){
            res.status(422).send("Insira corretamente as informações. 'email' ou 'password'");
        };

        const userDB = new UserDB();
        const user = await userDB.findUserByEmail(email);

        if(!user){
            res.status(409).send("Este e-mail não está cadastrado.");
        };

        const passwordIsCorrect = new HashManager().compare(password, user.getPassword());

        if(!passwordIsCorrect){
            res.status(401).send("E-mail ou senha incorretos.");
        };

        const token = new Authenticator().generateToken({ id: user.getId(), email});

        res.status(200).send({message: "Usuário logado com sucesso.", token: token});
    } 
    catch (error) {
        res.status(400).send(error.message);
    };
};