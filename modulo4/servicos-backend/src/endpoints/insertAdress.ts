import { Request, Response } from "express";
import { insertAdressDB } from "../data/insertAdressDB";
import { getFullAdress } from "../services/getFullAdress";

export const insertAdress = async (req: Request, res: Response) => {
    try {
        const { cep, numero, complemento }= req.body;

        if(isNaN(numero)){
            throw new Error("é preciso passar um número no campo numero");
        };

        if(!cep || !numero){
            throw new Error("Necessário passar um body");
        };

        const address = await getFullAdress(req.body);

        if(!address){
            throw new Error("cep inválido");
        };
        
        await insertAdressDB(address);

        res.status(201).send("Endereco criado com sucesso");
    } catch (error:any) {
        res.status(400).send(error.message);
    };
};