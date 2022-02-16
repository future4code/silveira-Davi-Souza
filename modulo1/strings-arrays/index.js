// Exercícios de interpretação de código
// 1:
// A)
// let array
// console.log('a. ', array) ==> irá imprimir undefined.
// B)
// array = null
// console.log('b. ', array) ==> irá imprimir null.
// C)
// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) ==> irá imprimir 11, o tamanho da array.
// D)
// let i = 0
// console.log('d. ', array[i]) ==> irá imprimir 3.
// E)
// array[i+1] = 19
// console.log('e. ', array) ==> ele substitui a segunda posição (1), pelo número 19 e imprime a array.
// F)
// const valor = array[i+6]
// console.log('f. ', valor) //==> ele irá imprimir o 9.

//2:

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"? Será: SUBI NUM ÔNIBUS EM MIRROCOS
//----------------------------------------------------------------------------------------------
//Exercícios de escrita de código
//1:

// const nomeUsuario = prompt("Digite o seu nome:");
// const emailUsuario = prompt("Digite seu e-mail:");

// let frase = `O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUsuario}.`;
// let frase2 = "O e-mail " + emailUsuario + " foi cadastrado com sucesso. Seja bem-vindo(a), " + nomeUsuario + ".";
// console.log(frase);

//2)

// let comidasFavoritas = ["Hamburguer","Lasanha","Pizza","Alaminuta","Churrasco"];

//A)
// console.log(comidasFavoritas);
//B)
// console.log("Essas são as minhas comidas preferidas:");
// console.log(comidasFavoritas[0]);
// console.log(comidasFavoritas[1]);
// console.log(comidasFavoritas[2]);
// console.log(comidasFavoritas[3]);
// console.log(comidasFavoritas[4]);
//C)
// let comidaUsuario = prompt("Qual a sua comida preferida?");

// let i = 0;

// comidasFavoritas[i + 1] = comidaUsuario;

// console.log(comidasFavoritas);

//3)
//A)
// let listaDeTarefas = [];
//B)
// const tarefa1Usuario = prompt("Digite uma tarefa a ser feita:");
// const tarefa2Usuario = prompt("Digite uma tarefa a ser feita:");
// const tarefa3Usuario = prompt("Digite uma tarefa a ser feita:");

// listaDeTarefas.push(tarefa1Usuario, tarefa2Usuario, tarefa3Usuario);
//C)
// console.log(listaDeTarefas);
//D)
// const i = Number(prompt("Digite uma tarefa que já realizou. 1, 2 ou 3"));
//E
// listaDeTarefas.splice(i - 1, 1);
//F
// console.log(listaDeTarefas)

//--------------------------------------------------------------------------------------------
//DESAFIO
//1)
// let frase = prompt("Digite uma frase.");
// let array = frase.split(" ");
// console.log(array)
//2)
//Não consegui.