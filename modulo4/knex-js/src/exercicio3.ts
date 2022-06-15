import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

// exercício 3

// a) 

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
    `);

    return result[0][0];    
};

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (error: any) {
        if(res.statusCode === 200) {
            res.status(500).send({message: "Unexpected error"});
        }
        else{
            res.send(error.message);
        };
    };
});

// b

const countActors = async( gender: string ): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    
    const count:number = result[0][0].count;
    
    return count;
};

app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender: string | undefined = req.query.gender as string;

        if(gender === undefined){
            res.statusCode = 400;
            throw new Error("É necessário passar uma query");
        };

        const quantity = await countActors(gender);
  
        res.status(200).send({quantidade: quantity});

    } catch (error: any) {
        if(res.statusCode === 200) {
            res.status(500).send({message: "Unexpected error"});
        }
        else{
            res.send(error.message);
        };
    };
});
