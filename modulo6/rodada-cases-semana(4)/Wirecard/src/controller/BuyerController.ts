import { Request, Response } from "express";
import BuyBusiness from "../business/BuyBusiness";
import { InputAddBuy } from "../models/BuyModel";

class BuyerController {
    constructor(
        private buyBusiness = new BuyBusiness()
    ){};

    public addBuy = async(req: Request, res: Response) => {
        try {
            const{name, email, cpf} = req.body;

            const input: InputAddBuy = {
                name,
                email,
                cpf
            };

            await this.buyBusiness.addBuy(input);
            res.status(201).send({ message: "Buy sucess" });
        } 
        catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        };
    };
};

export default BuyerController;