import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

// Esse arquivo seria o index.ts

// const getActorById = async (id: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE id = '${id}'
//   `);

// 	return result[0][0];
// };


// Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log(await getActorById("001") )
// })()


// Ou então podemos chamá-la dentro de um endpoint
// app.get("/users/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id

//     console.log(await getActorById(id));

//     res.end();
//   } catch (error: any) {
// 		console.log(error.message)
//     res.status(500).send("Unexpected error")
//   };
// }); // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

//Exercício 1:

// a) Utilizando o raw nós conseguimos um objeto da nossa tabela.

// b)

const getActorByName = async( name: string ):Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor
        WHERE name LIKE '%${name}%'
    `);

    return result[0][0];
};

app.get("/users", async ( req: Request, res: Response ) => {
    try {
        const name: string = req.body.name;

        if(!name){
            res.statusCode = 400;
            throw new Error("É necessário passar um name no body");
        };

        res.status(201).send(await getActorByName(name));

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

const countActors = async( gender: string ): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    
    const count:number = result[0][0].count;
    
    return count;
};

app.get("/users/gender", async ( req: Request, res: Response ) => {
    try {
        const gender: string = req.body.gender;

        if(!gender){
            res.statusCode = 404;
            throw new Error("É necessário passar um gender no body");
        };

        const quantity = await countActors(gender);

        res.status(200).send({Quantity: quantity});

    } catch (error: any) {
        if(res.statusCode === 200) {
            res.status(500).send({message: "Unexpected error"});
        }
        else{
            res.send(error.message);
        };
    };    
});