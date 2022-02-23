/*
Exercícios de interpretação de código
1
O que o código abaixo está fazendo? Está criando um laço e adicionando i ao valor
Qual o resultado impresso no console? Irá imprimir 10

2
a) O que vai ser impresso no console? 19,21,23,25,27,30

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso? Declarar uma variável fora do escopo do for, adicionando um contador no for of, exemplo: i++.

3

Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ? Se ele digitar 4 a saída será : *, **, ***, ****.


*/

//Exercícios de escrita de código
// 1
// a, b, c.
// const pets = Number(prompt("Quantos Pets você tem?"));
// let nomes = [];


// if(pets === 0){
//     console.log("Que pena! Você pode adotar um pet!");
// }
// else{
//     for(let i = 0; i < pets; i++){
//         nomes[i] = prompt(`Digite o nome do seu ${i} Pet`);

//         console.log(nomes[i]);
//     }
// }

//2

// a)

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// for (let i of arrayOriginal){
//     console.log(i);
// }

// b)

// for (let i of arrayOriginal){
//     console.log(i / 10);
// }

// c)

// let aux = [];
// let cont = 0;

// for (let i of arrayOriginal){
//   if((i % 2) === 0){
//       aux[cont] = i;
//       cont++
//   }
// }

// d)

// let arrayAux = [];

// for(let i = 0; i < arrayOriginal.length; i++){
//     arrayAux[i] = `O elemento do índice ${i} é igual a ${arrayOriginal[i]}`;
// }

// for(let texto of arrayAux){
//     console.log(texto);
// }

// e)

// let max = arrayOriginal[0];
// let min = arrayOriginal[0];

// for(let i of arrayOriginal){
//     if(i < min){
//         min = i;
//     }
//     else if(i > max){
//         max = i;
//     }
// }

// -------------------------------------------------------------------------

// 1)

//a), b), c)

// const segredo = Number(prompt("Qual é o número secreto?"));
// console.log("Vamos jogar!");

// let chute;
// let tentativas = 0;

// do{
//     chute = Number(prompt("Qual é o número secreto?"));
//     if(chute < segredo){
//         console.log(`O número chutado foi: ${chute}\n
//         Errrrrrrrou, é maior`);
//     }
//     if(chute > segredo){
//         console.log(`O número chutado foi: ${chute}\n
//         Errrrrrrrou, é menor`);
//     }
//     tentativas++;
    
// }while(chute === segredo)
// console.log(`Acertoooooou!!!\n O número de tentativas foi ${tentativas}`);

// 2 

// const segredo = Math.floor(Math.random() * (100 - 1)) + 1;

// console.log("Vamos jogar!");
// console.log(segredo);

// let chute;
// let tentativas = 0;

// do{
//     chute = Number(prompt("Qual é o número secreto?"));
//     if(chute < segredo){
//         console.log(`O número chutado foi: ${chute}\nErrrrrrrrou, é maior`);
//     }
//     if(chute > segredo){
//         console.log(`O número chutado foi: ${chute}\nErrrrrrrrou, é menor`);
//     }
//     tentativas++;
    
// }while(chute !== segredo)
// console.log(`Acertoooooou!!!\nO número de tentativas foi ${tentativas}`);