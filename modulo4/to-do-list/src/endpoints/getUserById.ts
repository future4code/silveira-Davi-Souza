import { Request, Response } from "express";
import getUserByIdDB from "../data/getUserByIdDB";

const getUserById = async ( req: Request, res: Response ) => {
    try {
        const id: string = req.params.id;
        
        const result: {} = await getUserByIdDB(id);

        if(result === undefined){
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        }

        res.status(201).send(result);
    } 
    catch (error: any) {
        res.statusCode === 200 ? 
        res.status(500).send({message: "Unexpected error"}) 
        : 
        res.send({message: error.message || error.sqlMessage});
    };
};

export default getUserById;