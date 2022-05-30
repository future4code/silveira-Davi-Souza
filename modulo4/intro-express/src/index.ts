import express, { Request, response, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT:number = 3003;

app.use(express.json());
app.use(cors());

// Exercício 1:
app.get("/", (req,res) => {
    res.send("Olá, Mundo!")
});

// Exercício 2:
type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website?: string
};

// Exercício 3:
const data:Array<User> = [
    {
        id: 1,
        name: "Rogério",
        phone: "55 11 99574-7815",
        email: "rogerinho@gmail.com",
        website: "autopecas.com"
    },
    {
        id: 2,
        name: "João",
        phone: "55 12 98541-4586",
        email: "joao@gmail.com",
        website: "montagemeconstrucao.com"
    },
    {
        id: 3,
        name: "Flávia",
        phone: "55 12 99941-8675",
        email: "joiasfinas@gmail.com",
        website: "joiasfinas.com"
    },
    {
        id: 4,
        name: "Paula",
        phone: "55 12 99861-6894",
        email: "paula@gmail.com",
        website: "mecanicapaula.com"
    },
    {
        id: 5,
        name: "Miro",
        phone: "55 12 99856-6375",
        email: "noburaco@gmail.com",
        website: "noburacogolfe.com"
    },
];

// Exercício 4:
app.get("/users", (request:Request, response:Response) => {
    response.status(200).send(data);
});

// Exercício 5:
type UserPost = {
    id:number,
    title:string,
    body: string,
    userId:number
};

// Exercício 6: prefiro fazer fora do array de usuários, para fins de entendimento do exercício e porque seria melhor não misturar ambos os arrays.

const posts:UserPost[] = [
    {
        id:1,
        title:"Olá",
        body: "Estou testando o meu primeiro post nessa plataforma",
        userId: 3
    },
    {
        id:2,
        title:"Olá, Flávia",
        body: "Seja bem vinda a essa plataforma tão querida!!!!",
        userId: 2
    },
    {
        id:3,
        title:"Eae",
        body: "Rapaziada vim de um tiroteio que vcs não acreditariam",
        userId: 5
    },
    {
        id:4,
        title:"Opa",
        body: "To perdidão aqui. tudo certo com vcs?",
        userId: 1
    },
];

// Exercício 7: 
app.get("/posts", (req:Request, res:Response) => {
    res.status(200).send(posts);
});

// Exercício 8:
app.get("/posts/:id", (req:Request, res:Response) => {
    const id:number = Number(req.params.id);

    const post = posts.find( item => {
        return item.id === id;
    });

    res.status(200).send(post);
});

app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`));