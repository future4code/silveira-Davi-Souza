import express, { Request, Response } from 'express';
import cors from 'cors';
import { User, users, Extrato } from './data';

const app = express();
const PORT:number = 3003;
let usersList:User[] = users;
const dataAtual = new Date();
const anoAtual:number = dataAtual.getFullYear();
const diaAtual:number = dataAtual.getDate();
const mesAtual:number = dataAtual.getMonth() + 1;

app.use(express.json());
app.use(cors());

app.post("/users", (req:Request, res:Response) => {          
    try{
        
        const body: User = {
            name: req.body.name,
            cpf: req.body.cpf,
            data: req.body.data,
            saldo: 0
        };

        const idade:number = anoAtual - Number(req.body.data.split("/", 3)[2]);

        if(idade > 18){
            res.statusCode = 400;
            throw new Error("Usuário precisa ter no mínimo 18 anos.");    
        };

        const usuario:User | undefined = usersList.find( user => {
            if(req.body.cpf === user.cpf)
                return user;
        });

        if(usuario){
            res.statusCode = 409;
            throw new Error("O cpf informado já foi cadastrado.");  
        };

        usersList.push(body);

        res.status(200).send({message: "Usuário criado com sucesso"});
    }
    catch(error: any){
        if(res.statusCode === 200){
            res.status(500).send({message: "Internal Server Error."});
        }
        else{
            res.send(error.message);
        }   
    };
});

app.get("/users", (req:Request, res:Response) => {
    try{
        const name = req.body.name;
        const cpf = req.body.cpf;

        console.log(req.body.name, name, req.body.cpf, cpf)

        if(!req.body.name && !req.body.cpf){
            res.status(200).send(usersList);
        }

        const usuario:User | undefined = usersList.find( user => {
            if(user.cpf === cpf && user.name.includes(name))
                return user;
        });

        if(!usuario){
            res.statusCode = 404;
            throw new Error("Usuário não encontrado."); 
        };

        res.status(200).send(usuario);
    }
    catch(error: any){
        if(res.statusCode === 200){
            res.status(500).send({message: "Internal Server Error."});
        }
        else{
            res.send(error.message);
        }   
    };
});

app.put("/users", (req:Request, res:Response) => {
    try{
        const name = req.body.name;
        const cpf = req.body.cpf;
        const saldo = req.body.saldo;

        const usuario:User | undefined = usersList.find( user => {
            if(user.cpf === cpf && user.name.includes(name)){
                user.saldo = user.saldo + saldo;
                return user;
            };
        });

        if(!usuario){
            res.statusCode = 404;
            throw new Error("Usuário não encontrado."); 
        };

        res.status(200).send({message: "Saldo atualizado com sucesso."});
    }
    catch(error: any){
        if(res.statusCode === 200){
            res.status(500).send({message: "Internal Server Error."});
        }
        else{
            res.send(error.message);
        }   
    };
});

app.put("/users/user", (req:Request, res:Response) => {
    try{
        const token:string|undefined = req.headers.authorization;
        let { valor, data, descricao }:Extrato = req.body
        const dataArray:number[] = req.body.data.split("/", 3);

        if(!data){
            data = `${diaAtual}/${mesAtual}/${anoAtual}`;
        };

        if(dataArray[0] < diaAtual){
            if(dataArray[1] < mesAtual){
                if(dataArray[2] <= anoAtual){
                    res.statusCode = 400;
                    throw new Error("A data precisa ser maior ou igual ao dia atual."); 
                }
            }else if(dataArray[2] < anoAtual){
                res.statusCode = 400;
                throw new Error("A data precisa ser maior ou igual ao dia atual."); 
            }
        }else if(dataArray[1] < mesAtual){
            if(dataArray[2] <= anoAtual){
                res.statusCode = 400;
                throw new Error("A data precisa ser maior ou igual ao dia atual."); 
            }
        }else if(dataArray[2] < anoAtual){
            res.statusCode = 400;
            throw new Error("A data precisa ser maior ou igual ao dia atual."); 
        }

        if(!token){
            res.statusCode = 404;
            throw new Error("Usuário não encontrado."); 
        };

        const usuario:User | undefined = usersList.find( user => {
            if(user.cpf === token){
                user.extrato ? 
                user.extrato.push({valor: valor, data: data, descricao}) 
                : 
                user.extrato = [{valor: valor, data: data, descricao}]
                
                return user;
            };
        });

        if(!usuario){
            res.statusCode = 404;
            throw new Error("Usuário não encontrado."); 
        };

        res.status(200).send(usuario);
    }
    catch(error: any){
        if(res.statusCode === 200){
            res.status(500).send({message: "Internal Server Error."});
        }
        else{
            res.send(error.message);
        }   
    };
});

app.put("/users/tranferencia", (req:Request, res:Response) => {
    try{
        let { nomeUser, cpfUser, nomeDest, cpfDest, valor}:any = req.body;

        if(typeof valor !== "number"){
            res.statusCode = 422;
            throw new Error("O valor precisa ser um number."); 
        }

        const usuario:User | undefined = usersList.find( user => {
            if(user.cpf === cpfUser && user.name.includes(nomeUser)){
                return user
            }
        });

        if(!usuario){
            res.statusCode = 404;
            throw new Error("Usuário não encontrado."); 
        };

        const destinatario:User | undefined = usersList.find( user => {
            if(user.cpf === cpfDest && user.name.includes(nomeDest)){
                return user
            }
        });

        if(!destinatario){
            res.statusCode = 404;
            throw new Error("Usuário não encontrado."); 
        };

        if(usuario.saldo < valor ){
            res.statusCode = 400;
            throw new Error("O seu saldo é insuficiente."); 
        }

        usuario.saldo = usuario.saldo - valor;
        destinatario.saldo = destinatario.saldo + valor;

        res.status(200).send([usuario, destinatario]);
    }
    catch(error: any){
        if(res.statusCode === 200){
            res.status(500).send({message: "Internal Server Error."});
        }
        else{
            res.send(error.message);
        }   
    };
});
app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`));