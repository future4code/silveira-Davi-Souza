import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
};

// exercício 2:

// a)

const updateSalary = async (salary: number, id: string): Promise<any>  => {
    await connection("Actor")
    .update({salary: salary})
    .where("id", id);
};

app.put("/users/:id", async ( req: Request, res: Response ) => {
    try {
        const id: string = req.params.id;
        const salary: number = req.body.salary;

        if(!salary){
            res.statusCode = 404;
            throw new Error("É necessário passar um salary no body");
        };
        if(!id){
            res.statusCode = 404;
            throw new Error("É necessário passar um id como parâmetro");
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

app.delete("/users/:id", async ( req: Request, res: Response ) => {
    try {
        const id: string = req.params.id;

        if(!id){
            res.statusCode = 404;
            throw new Error("É necessário passar um name no body");
        };

        deleteActor( id );

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

// c)

const mediaSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    console.log("result: ",result);

    return result[0].average;
};

app.get("/users", async ( req: Request, res: Response ) => {
    try {
        const gender: string = req.body.gender;

        if(!gender){
            res.statusCode = 404;
            throw new Error("É necessário passar um gender no body");
        };

        const media: number = await mediaSalary( gender );

        console.log("media: ", media)

        res.status(200).send({media: media});
        
    } catch (error: any) {
        if(res.statusCode === 200) {
            res.status(500).send({message: "Unexpected error"});
        }
        else{
            res.send(error.message);
        };
    };
});
