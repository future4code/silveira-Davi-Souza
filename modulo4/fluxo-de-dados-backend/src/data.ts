// Exercício 2

export type Produto = {
    id: string,
    name: string,
    price: number
}

export const produtos: Produto[] = [
    {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name: "Celular",
        price: 500
    },
    {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name: "Bateria",
        price: 100
    },
    {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name: "Carregador",
        price: 30
    },
    {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name: "Fone de Ouvido",
        price: 50
    },
]