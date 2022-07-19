import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { userInput } from "../types/user";

const userBusiness = new UserBusiness();

class UserController {
    public signup = async (req: Request, res: Response): Promise<any> => {
        try {
            const user: {name: string, email: string, password: string, role: string} = req.body;

            const newUser: userInput = {
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role
            };

            const token = await userBusiness.signup(newUser);

            res.status(201).send({message: "Usuário criado com sucesso", token: token})
        } 
        catch (error: any) {
            res.status(500).send({message: error.message});
        };
    };

    public login = async (req: Request, res: Response) => {
        try {
            const loginData = {
                email: req.body.email,
                password: req.body.password
            };
           
            const token = await userBusiness.login(loginData);

            res.status(200).send({ token });
        } 
        catch (error: any) {
            res.status(500).send({message: error.message});
        };
    };

    public get = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization!;
            const users = await userBusiness.get(token);

            res.send(users).status(200);

        } 
        catch (error: any) {
            res.send({ message: error.message }).status(error.status);
        };
    };

    async deleteUser(req: Request, res: Response) {
        try {
            const input = {
                id: req.params.id,
                token: req.headers.authorization!
            };

            await userBusiness.deleteUser(input);

            res.status(200).send({ message: "Usuário apagado com sucesso" });
        } 
        catch (error: any) {
            res.status(400).send({ error: error.message });
        };
    };
};

export default UserController;