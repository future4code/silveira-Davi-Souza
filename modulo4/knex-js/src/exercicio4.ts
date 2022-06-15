import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

// exercicio 4

// a)

const updateSalary = async (salary: number, id: string): Promise<any>  => {
    await connection("Actor")
    .update({salary: salary})
    .where("id", id);
};

app.put("/actor", async ( req: Request, res: Response ) => {
    try {
        const id: string = req.body.id;
        const salary: number = req.body.salary;

        if(!salary){
            res.statusCode = 404;
            throw new Error("É necessário passar um salary no body");
        };
        if(!id){
            res.statusCode = 404;
            throw new Error("É necessário passar um id no body");
        };

        updateSalary(salary, id);

        res.status(201).send({message: "Update realizado com sucesso!"});
        
    } catch (error: any) {
        if(res.statusCode === 200) {
            res.status(500).send({message: "Unexpected error"});
        }
        else{
            res.send(error.message);
        };
    };
});

// b)

const deleteActor = async ( id: string ): Promise<any>  => {
    await connection("Actor")
    .delete()
    .where("id", id);
};

app.delete("/actor/:id", async ( req: Request, res: Response ) => {
    try {
        const id: string = req.params.id;

        if(!id){
            res.statusCode = 404;
            throw new Error("É necessário passar um name no body");
        };

        deleteActor(id);

        res.status(200).send({message: "Usuário deletado com sucesso!"});
        
    } catch (error: any) {
        if(res.statusCode === 200) {
            res.status(500).send({message: "Unexpected error"});
        }
        else{
            res.send(error.message);
        };
    };
});