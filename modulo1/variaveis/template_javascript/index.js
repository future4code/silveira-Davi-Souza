// Exercício 1
/** 
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

// Nesse primeiro exercício o primeiro console mostrará 10 e o próximo 10 e 5 respectivamente.

*/

//Exercício 2
/*

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

// O console irá imprimir "10 10 10"

*/

//Exercício 3
/**
 * let p = prompt("Quantas horas você trabalha por dia?");
 * let t = prompt("Quanto você recebe por dia?");
 * alert(`Voce recebe ${t/p} por hora`);
 */

// Acredito que o nome mais adequado para a variável "p" seria "horasTrabalhadas",
// o mais adequado para a variável "t" seria "ganhoDiario", ficando assim:

/**
 * let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?");
 * let ganhoDiario = prompt("Quanto você recebe por dia?");
 * alert(`Voce recebe ${ganhoDiario/horasTrabalhadas} por hora`);
 */

//Exercício 4
/*
const nome = undefined;
let idade;

console.log(typeof nome, typeof idade);

//Nesse primeiro tentei sem definir nada e ocorreu um erro, então percebi que uma constante não pode ficar sem definição. Porém o resultado de ambas é undefined 
*/
/*
const nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");

console.log(nome, idade);

//Nessa etapa recebi o nome e a idade

const nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");

console.log("Olá",nome,", você tem" ,idade, " anos.");
*/

//Exercício 5
/*
let resp1 = prompt("Você está usando uma roupa azul hoje?");
let resp2 = prompt("Você já terminou as atividades do dia?");
let resp3 = prompt("Você entendeu o conteúdo da aula?");

console.log("Você está usando uma roupa azul hoje? -",resp1);
console.log("Você já terminou as atividades do dia? -",resp2);
console.log("Você entendeu o conteúdo da aula? -",resp3);
*/

//Exercício 6
/*
let a = 10;
let b = 25;
let c;

// Aqui faremos uma lógica para trocar os valores
c = a;
a = b;
b = c;

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
*/

//Desafio
/*
let num1 = prompt("Digite um número:");
let num2 = prompt("Digite outro número:");

let soma = Number(num1) + Number(num2);
let mult = Number(num1) * Number(num2);

console.log("1. O primeiro número somado ao segundo número resulta em:",soma);
console.log("2. O primeiro número multiplicado pelo segundo número resulta em:",mult);
*/