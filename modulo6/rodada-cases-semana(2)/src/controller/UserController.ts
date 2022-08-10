import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { loginInputDTO } from "../types/loginInputDTO";
import { signupInputDTO } from "../types/signupInputDTO";

class UserController {
    constructor(
        private userBusiness: UserBusiness
    ){};

    public signup = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, email, password } = req.body;

            const input: signupInputDTO = {
                name,
                email,
                password
            };

            const token = await this.userBusiness.signup(input);

            res.status(201).send({message: "User created succefully", token});
        } 
        catch (error: any) {
            res.status(500).send({message: error.message});
        };
    };

    public login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;

            const input: loginInputDTO = {
                email,
                password
            };

            const token = await this.userBusiness.login(input);

            res.status(200).send({message: "User logged succefully", token})
        } 
        catch (error: any) {
            res.status(500).send({message: error.message});
        };
    };
};

export default UserController;