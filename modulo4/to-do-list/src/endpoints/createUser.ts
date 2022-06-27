import { Request, Response } from "express";
import createUserDB from "../data/createUserDB";

const createUser = async ( req: Request, res: Response ) => {
    try {
        const { name, nickname, email} = req.body;

        if(!name || !nickname || !email){
            res.statusCode = 404;
            throw new Error("Valores do body estão faltando.");
        };

        if(typeof name !== "string" || typeof nickname !== "string" || typeof email !== "string"){
            res.statusCode = 400;
            throw new Error("Tipo dos valores incorreto.");
        };

        await createUserDB({name, nickname, email});

        res.status(201).send({message: "Sucesso"});

    } 
    catch (error: any) {
        res.statusCode === 200 ? 
        res.status(500).send({message: "Unexpected error"}) 
        : 
        res.send({message: error.message || error.sqlMessage});
    };
};

export default createUser;