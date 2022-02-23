// Exercícios de interpretação de código
// 1
// a) Explique o que o código faz. Qual o teste que ele realiza? Verifica se o número é par.

// b) Para que tipos de números ele imprime no console "Passou no teste"? Pares.

// c) Para que tipos de números a mensagem é "Não passou no teste"? Ímpares.

// 2
// a) Para que serve o código acima? Imprime o preço de uma fruta.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? "O preço da fruta Maçã é R$2.25"

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? "O preço da fruta Pêra é R$5"

// 3
// a) O que a primeira linha está fazendo? Pedindo um número para o usuário.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? "Esse número passou no teste" e "Essa mensagem é secreta!!!"
// E se fosse o número -10? Erro

// c) Haverá algum erro no console? Sim
// Justifique usando os conceitos de bloco ou escopo. O erro ocorre pois a variável mensagem está somente sendo definida dentro do escopo do if, como o número não passou, a variável não foi definida.
// ----------------------------------------------------------------------------------------------------------------

// Exercícios de escrita de código

// 1

// let idade = Number(prompt("Digite a sua idade:"));

// function verificaIdade(a){
//     if(a >= 18){
//         return "Você pode dirigir!";
//     }
//     return "Você não pode dirigir!";
// }

// console.log(verificaIdade(idade));

// 2

// let turno = prompt("Digite o turno em que estuda: M (matutino) ou V (Vespertino) ou N (Noturno)");

// function verificaTurno(a){
//     if(a === "M")
//         return "Bom dia!!";
//     else if(a === "V")
//         return "Boa tarde!!";
//     else if(a === "N")
//         return "Boa noite!!";
//     return "Inválido";
// }

// console.log(verificaTurno(turno.toUpperCase()));

// 3

// let turno = prompt("Digite o turno em que estuda: M (matutino) ou V (Vespertino) ou N (Noturno)");

// switch (turno.toUpperCase()) {
//     case "M":
//         console.log("Bom dia");
//         break;
//     case "V":
//         console.log("Boa tarde");
//         break;
//     case "N":
//         console.log("Boa noite");
//         break;
//     default:
//         console.log("Inválido");
//         break;
// }

// 4

// let filme = prompt("Digite o genero do filme que deseja assistir:");
// let valor = Number(prompt("Digite quanto você tem de dinheiro:"));

// function verificaFilme(a, b){
//     if(a === "fantasia"){
//         if(b >= 15)
//             return "Bom filme!"
//         return "Escolha outro filme :("
//     }
//     return "Escolha outro filme :("
// }

// console.log(verificaFilme(filme.toLowerCase(), valor));

// ---------------------------------------------------------------------------------------------------------------------
//DESAFIO
// 1
// let filme = prompt("Digite o genero do filme que deseja assistir:");
// let valor = Number(prompt("Digite quanto você tem de dinheiro:"));
// let lanche = prompt("qual lanchinho você vai comprar (pipoca, chocolate, doces, etc)?");

// function verificaFilme(a, b){
//     if(a === "fantasia"){
//         if(b >= 15)
//             return `Bom filme! \ne aproveite o seu ${lanche}.`
//         return "Escolha outro filme :("
//     }
//     return "Escolha outro filme :("
// }

// console.log(verificaFilme(filme.toLowerCase(), valor));

// 2 
//Não consegui
