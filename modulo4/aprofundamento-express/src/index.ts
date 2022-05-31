import express, { Request, response, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT:number = 3003;

app.use(express.json());
app.use(cors());

// Exercício 1
app.get("/ping", (req, res) => {          
    res.send("Pong!")
})

// Exercício 2
type Afazer = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// Exercício 3
let afazeres: Afazer[] = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: true
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
    },
    {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
    },
    {
        userId: 2,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
    },
    {
        userId: 2,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: true
    },
    {
        userId: 2,
        id: 7,
        title: "illo expedita consequatur quia in",
        completed: false
    },
]

// Exercício 4
app.get("/afazeres", (req:Request, res: Response) => {
    const { finalizado } = req.query;
    const error:boolean = finalizado === "sim" || finalizado === "nao" ? true : false;

    if(error){
        const afazeresList = afazeres.filter( afazer => {
            if(finalizado === "nao"){
                return afazer.completed === false ? true : false;
            }
            else{
                return afazer.completed === true ? true : false;
            };
        }).map( tarefa => {
            return tarefa;
        });
        res.status(200).send(afazeresList);
    }
    else {
        res.status(400).send({message: "Query não atende aos requisitos, insira apensa sim ou nao."});
    }
});

// Exercício 5 

app.post("/afazer/:userId", (req:Request, res: Response) => {
    const id = req.params.userId;

    const body:Afazer = {
        userId: Number(id),
        id: afazeres.length + 1,
        title: req.body.title,
        completed: req.body.completed
    };

    afazeres.push(body);

    res.status(200).send(afazeres);
});

// Exercício 6
app.put("/afazer/:afazerId", (req:Request, res: Response) => {
    const id = req.params.afazerId;

    console.log(id);

    afazeres = afazeres.map( tarefa => {
        if(tarefa.id === Number(id)){ 
            console.log("encontrei")
            tarefa.completed = !tarefa.completed;
            return tarefa
        }
        else {
            return tarefa;
        }
    });

    res.status(200).send(afazeres);
});

// Exercício 7
app.delete("/afazer/:afazerId", (req:Request, res: Response) => {
    const id = req.params.afazerId;

    afazeres = afazeres.filter( afazer => {
        return afazer.id !== Number(id) ? true : false;
    }).map( tarefa => {
        return tarefa;
    })

    res.status(200).send(afazeres);
});

// Exercício 7
app.get("/afazeres/:userId", (req:Request, res: Response) => {
    const id = req.params.userId;

    afazeres = afazeres.filter( afazer => {
        return afazer.userId === Number(id) ? true : false;
    }).map( tarefa => {
        return tarefa;
    })
   
    res.status(200).send(afazeres);
});

app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`));