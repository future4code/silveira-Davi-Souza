import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { signupInputDTO } from "../types/SignupInputDTO";

class UserController {
    constructor(
        private userBusiness: UserBusiness
    ){};

    public signup = async (req: Request, res: Response): Promise<void> => {
        try {
            const {name, email, password} = req.body;

            const input: signupInputDTO = {
                name,
                email,
                password
            };

            const token = this.userBusiness.signup(input);

            res.status(201).send({message: "User created succefully", token});
        } 
        catch (error: any) {
            res.status(500).send({message: error.message});
        };
    };

    public login = async (req: Request, res: Response): Promise<void> => {
        try {
            
        } 
        catch (error: any) {
            
        };
    };
};

export default UserController;