// Exercícios de interpretação de código

//1:
//A) O que vai ser impresso no console? 10 e 50
//B) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console? Nada

//2:
//A) Explique o que essa função faz e qual é sua utilidade - Ela retorna true ou false, e sua utilidade é verificar se no texto do usuário possui a palavra "cenoura".
// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   Eu gosto de cenoura
//      ii.  CENOURA é bom pra vista
//      iii. Cenouras crescem na terra
// Será true para todas as opções.

//--------------------------------------------------------------

// Exercícios de escrita de código

//1:

//A)
// function informacoes(){
//     console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.");
// }

// informacoes();

//B)

// let nome = prompt("Digite o seu nome:");
// let idade = prompt("Digite a sua idade");
// let cidade = prompt("Digite a sua cidade");
// let profissao = prompt("Digite a sua profissão");

// function informacoes(){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`);
// }

// informacoes();

//2:

// //A)

// function soma(a,b){
//     return a + b;
// }

// console.log(soma(10,5));

// //B)

// function comparacao(a,b){
//     return a >= b;
// }

// console.log(`O primeiro número é maior que o segundo? ${comparacao(10,5)}`);

// //C)

// function parOuImpar(a){
//     return a % 2 === 0;
// }

// console.log(`O número é par? ${parOuImpar(10)}`);

// //D)
// let msg = prompt("Digite uma mensagem:");

// function mensagem(a){
//     console.log(a.length);
//     console.log(a.toUpperCase);
// }

// mensagem(msg);

//3

// let num1 = Number(prompt("Digite um número:"));
// let num2 = Number(prompt("Digite outro número:"));

// function soma(a,b){
//     console.log(`Soma: ${a + b}`);
// }

// function subtracao(a,b){
//     console.log(`Diferença: ${a - b}`);
// }

// function multiplicacao(a,b){
//     console.log(`Multiplicação: ${a * b}`);
// }

// function divisao(a,b){
//     console.log(`Divisão: ${a / b}`);
// }

// console.log(`Números inseridos: ${num1} e ${num2}`);

// soma(num1,num2);
// subtracao(num1,num2);
// multiplicacao(num1,num2);
// divisao(num1,num2);

//--------------------------------------------------------------------------

//DESAFIO

//1:

// const imprime = a => console.log(a);
// const somar = (a, b) => a + b;

// imprime(somar(10,5));

//2:
// let num1 = Number(prompt("Digite um número:"));
// let num2 = Number(prompt("Digite outro número:"));

// function pitagoras(a, b){
//     hip = (a*a) + (b*b);
//     return Math.sqrt(hip)
// }

// console.log(pitagoras(num1,num2));