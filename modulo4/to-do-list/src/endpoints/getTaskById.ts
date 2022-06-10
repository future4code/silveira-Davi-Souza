import { Request, Response } from "express";
import getTaskByIdDB from "../data/getTaskByIdDB";

const getTaskById = async ( req: Request, res: Response ) => {
    try {
        const id: string = req.params.id;
        
        console.log("opa, olha eu aqui, teu ID: ", id)

        const result: {
            id: string, 
            title: string,
            description: string,
            limit_date: string,
            status: string,
            creator_user_id: string,
            nickname: string
        } = await getTaskByIdDB(id);

        if(result === undefined){
            res.statusCode = 404;
            throw new Error("Usuário não encontrado.");
        }

        // if(result){
        //     let date = result.limit_date.split("/",3);
        //     result.limit_date = `${date[2]}/${date[1]}/${date[0]}`;
        //     // result.limit_date = ((result.limit_date .getDate() )) + "/" + ((result.limit_date .getMonth() + 1)) + "/" + result.limit_date.getFullYear()
        // }
        
        console.log("merda: ", result)

        res.status(201).send(result);
    } 
    catch (error: any) {
        res.statusCode === 200 ? 
        res.status(500).send({message: "Unexpected error"}) 
        : 
        res.send({message: error.message || error.sqlMessage});
    };
};

export default getTaskById;