import { Request, Response } from "express";
import editUserDB from "../data/editUserDB";

const editUser = async ( req: Request, res: Response ) => {
    try {
        let name: string = req.body.name;
        let nickname: string = req.body.nickname;
        const id = req.params.id;

        if(!name && !nickname){
            res.statusCode = 404;
            throw new Error("body não está sendo passado.");
        }

        if(name !== undefined){
            name = name.split(" ").join("");
        }
            
        if(nickname !== undefined){
            nickname = nickname.split(" ").join("");
        }

        if(!id){
            res.statusCode = 404;
            throw new Error("Id não está sendo passado.");
        };

        if(name === "" || nickname === ""){
            res.statusCode = 400;
            throw new Error("Não é possível passar um valor vazio.");
        }

        const result = await editUserDB(id, {name, nickname});

        res.status(201).send({message: "Sucesso"});

    } 
    catch (error: any) {
        res.statusCode === 200 ? 
        res.status(500).send({message: "Unexpected error"}) 
        : 
        res.send({message: error.message || error.sqlMessage});
    };
};

export default editUser;