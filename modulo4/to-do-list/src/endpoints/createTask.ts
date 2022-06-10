import { Request, Response } from "express";
import createTaskDB from "../data/createTaskDB";

const createTask = async ( req: Request, res: Response ) => {
    try {
        const { title, description, creatorUserId} = req.body;
        const limitDateArr: string[] = req.body.limitDate.split("/", 3)
        const limitDate: string = `${limitDateArr[2]}/${limitDateArr[1]}/${limitDateArr[0]}`;

        console.log(limitDate)

        if(!title || !description || !limitDate || !creatorUserId){
            res.statusCode = 404;
            throw new Error("Valores do body estão faltando.");
        };

        if(typeof title !== "string" || typeof description !== "string" || typeof creatorUserId !== "string" || !limitDate){
            res.statusCode = 400;
            throw new Error("Tipo dos valores incorreto.");
        };

        await createTaskDB({ title, description, limitDate, creatorUserId });

        res.status(201).send({message: "Sucesso"});

    } 
    catch (error: any) {
        res.statusCode === 200 ? 
        res.status(500).send({message: "Unexpected error"}) 
        : 
        res.send({message: error.message || error.sqlMessage});
    };
};

export default createTask;