import express, { Request, Response } from 'express';
import cors from 'cors';
import { produtos, Produto } from './data';

const app = express();
const PORT:number = 3003;
let produtosList:Produto[] = produtos;

app.use(express.json());
app.use(cors());

// Exercício 1
app.get("/teste", (req:Request, res:Response) => {          
    res.send("Estou aqui!")
})

// Exercício 3
app.post("/produtos", (req:Request, res: Response) => {
    try{
        const name:string = req.body.name;
        const price:number = req.body.price;
        let body:Produto;

        if(!name || !price){
            res.statusCode = 404;
            throw new Error("Valor(es) do body não encontrado(s).");    
        };
        if(typeof name !== "string" || typeof price !== "number"){
            res.statusCode = 422;
            throw new Error("Valor(es) do body com o tipo errado.");
        };
        if(price <= 0){
            res.statusCode = 400;
            throw new Error("price não pode ser igual ou menor que 0.");   
        };

        body = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            name: name,
            price: price
        };

        produtosList.push(body);

        res.status(200).send(produtosList); 
    }
    catch(error: any){
        if(res.statusCode === 200){
            res.status(500).send({message: "Internal Server Error."})
        }
        else{
            res.send(error.message)
        }   
    }
});

// Exercício 4
app.get("/produtos", (req:Request, res:Response) => {          
    res.status(200).send(produtosList);
})

// Exercício 5
app.put("/produtos/:id", (req:Request, res: Response) => {
    try{
        const id = req.params.id;
        const price = req.body.price;

        if(!price){
            res.statusCode = 404;
            throw new Error("Valor do body não encontrado");    
        };
        if(typeof price !== "number"){
            res.statusCode = 422;
            throw new Error("Valor do body com o tipo errado.");
        };
        if(price <= 0){
            res.statusCode = 400;
            throw new Error("price não pode ser igual ou menor que 0.");   
        };

        let produto:Produto|undefined = produtosList.find( produto => {
            if(produto.id === id){
                produto.price = price;
                return produto
            }
        });

        if(!produto){
            res.statusCode = 404;
            throw new Error("produto não encontrado.");
        }

        res.status(200).send(produtosList);
    }
    catch(error: any){
        if(res.statusCode === 200){
            res.status(500).send({message: "Internal Server Error"})
        }
        else{
            res.send(error.message)
        }   
    }
});

// Exercício 6
app.delete("/produtos/:id", (req:Request, res: Response) => {
    try{
        const id = req.params.id;

        let produto:Produto|undefined = produtosList.find( (produto, index) => {
            if(produto.id === id){
                produtosList.splice( index, 1 );
                return produto
            }
        });

        if(!produto){
            res.statusCode = 404;
            throw new Error("produto não encontrado.");
        }
        // produtosList = produtosList.filter( produto => {
        //     return produto.id !== id ? true : false;
        // }).map( produto => {
        //     return produto;
        // });

        res.status(200).send(produtosList);
    }
    catch(error: any){
        if(res.statusCode === 200){
            res.status(500).send({message: "Internal Server Error"})
        }
        else{
            res.send(error.message)
        }   
    }
});

// // Exercício 5 

// app.post("/afazer/:userId", (req:Request, res: Response) => {
//     const id = req.params.userId;

//     const body:Afazer = {
//         userId: Number(id),
//         id: afazeres.length + 1,
//         title: req.body.title,
//         completed: req.body.completed
//     };

//     afazeres.push(body);

//     res.status(200).send(afazeres);
// });

// // Exercício 6
// app.put("/afazer/:afazerId", (req:Request, res: Response) => {
//     const id = req.params.afazerId;

//     console.log(id);

//     afazeres = afazeres.map( tarefa => {
//         if(tarefa.id === Number(id)){ 
//             console.log("encontrei")
//             tarefa.completed = !tarefa.completed;
//             return tarefa
//         }
//         else {
//             return tarefa;
//         }
//     });

//     res.status(200).send(afazeres);
// });

// // Exercício 7
// app.delete("/afazer/:afazerId", (req:Request, res: Response) => {
//     const id = req.params.afazerId;

//     afazeres = afazeres.filter( afazer => {
//         return afazer.id !== Number(id) ? true : false;
//     }).map( tarefa => {
//         return tarefa;
//     })

//     res.status(200).send(afazeres);
// });

// // Exercício 7
// app.get("/afazeres/:userId", (req:Request, res: Response) => {
//     const id = req.params.userId;

//     afazeres = afazeres.filter( afazer => {
//         return afazer.userId === Number(id) ? true : false;
//     }).map( tarefa => {
//         return tarefa;
//     })
   
//     res.status(200).send(afazeres);
// });

app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`));