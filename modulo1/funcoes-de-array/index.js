/*

Exercícios de interpretação de código:

1:

A - Resposta:
O programa irá percorrer o array e imprimir cada item, index e o array novamente.

2: 
A - Resposta: 
Irá imprimir um array com os nomes do array original.

3:
A - Resposta:
Irá imprimir o array com os objetos onde os apelidos são diferentes de "Chijo".

*/

// ----------------------------------------------------------------------------------
// Exercícios de escrita de código
/*
// 1:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
];
// a - Resposta:
const nomesPets = pets.map((item) => {
    return item.nome;
});

// b - Resposta:
const salsichas = pets.filter((item) => {
    return item.raca === "Salsicha";
});

// c - Resposta
const desconto = pets.map((item) => {
    if(item.raca === "Poodle"){
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`;
    }
}).filter(item => item !== undefined);

console.log(nomesPets);
console.log(salsichas);
console.log(desconto);
*/
/*
// 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
];

// a - Resposta
const nomeItem = produtos.map((item) => {
    return item.nome
});

// b - Resposta
const produtosDesconto = produtos.map((item) => {
    const obj = {}
    obj.nome = item.nome,
    obj.preco = (item.preco - (item.preco * 0.05)).toFixed(2);
    return obj;
});

// c - Resposta
const bebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
});

// d - Resposta
const ype = produtos.filter((item) => {
    return item.nome.includes("Ypê");
});

// e - Resposta
const frase = ype.filter((item) => {
    return item.nome = `Compre ${item.nome} por ${item.preco}`;
});

const arrayfrase = frase.map((item) => {
    return item.nome
});

console.log(nomeItem);
console.log(produtosDesconto);
console.log(bebidas);
console.log(ype);
console.log(arrayfrase);

*/

// --------------------------------------------------------------------

// Desafio

// 1
/*
const pokemons = [
{ nome: "Bulbasaur", tipo: "grama" },
{ nome: "Bellsprout", tipo: "grama" },
{ nome: "Charmander", tipo: "fogo" },
{ nome: "Vulpix", tipo: "fogo" },
{ nome: "Squirtle", tipo: "água" },
{ nome: "Psyduck", tipo: "água" },
]

// a - Resposta
const nomePokemons = pokemons.map(item => item.nome).sort();
console.log(nomePokemons);

// b - Resposta
const filtra = pokemons.map(item => item.tipo);

const tiraRepetido = filtra.filter((item, indice) => {
    return filtra.indexOf(item) === indice;
});

console.log(tiraRepetido);
*/