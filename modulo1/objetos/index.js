// Exercícios de interpretação de código
// 1
// a) O que vai ser impresso no console? Matheus Nachtergaele, Virginia Cavendish, Globo, 14h.

// 2
// a) O que vai ser impresso no console?nome: 
// "Juca", 
// idade: 3, 
// raca: "SRD"
// nome: "Juba", 
// idade: 3, 
// raca: "SRD"
// nome: "Jubo", 
// idade: 3, 
// raca: "SRD"
// b) O que faz a sintaxe dos três pontos antes do nome de um objeto? ela está fazendo uma cópia do objeto que sucede.

// 3

// a) O que vai ser impresso no console? false e undefined
// b) Explique o valor impresso no console. Você sabe por que isso aconteceu? Primeiro ele imprimiu o objeto com uma propriedade existente, após tentou imprimir uma propriedade que não existe no objeto.


// --------------------------------------------------------------------------------------------------
//Exercícios de escrita de código

// a)
//  function buscaObjeto(objeto) {
// 	return objeto
// }

// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }

//  // b)
// const pessoa2 = {
//     ... pessoa,
//     apelidos: ["Dinha", "Mandoca", "Amandenha"]
// }
// console.log(`Eu sou ${buscaObjeto(pessoa.nome)}, mas pode me chamar de: ${buscaObjeto(pessoa.apelidos)}`);
// console.log(`Eu sou ${buscaObjeto(pessoa2.nome)}, mas pode me chamar de: ${buscaObjeto(pessoa2.apelidos)}`);

// 2
// b)
// function getObject(object){
//     return [object.nome, object.nome.length, object.idade, object.profissao, object.profissao.length];
// }
// // a)
// const pessoa1 = {
//     nome: "João",
//     idade: 35,
//     profissao: "Físico"
// }

// const pessoa2 = {
//     nome: "Roberto",
//     idade: 28,
//     profissao: "Professor"
// }

// console.log(getObject(pessoa1));
// console.log(getObject(pessoa2));

// ------------------------------------------------------------------------------------------------

// 3
// a)
// function getFruit(fruit){
//     return carrinho.push(fruit)
// }

// let carrinho = [];

// const banana = {
//     nome: "Banana",
//     disponibilidade: true
// }

// const manga = {
//     ... banana,
//     nome: "Manga",
// }

// const abacate = {
//     ... banana,
//     nome: "Abacate"
// }

// getFruit(banana);
// getFruit(manga);
// getFruit(abacate);

// console.log(carrinho)

//---------------------------------------------------------------------------

//DESAFIO
// 1)
// function getUsuario(){
//     let nome = prompt("Digite seu nome:");
//     let idade = Number(prompt("Digite sua idade:"));
//     let profissao = prompt("Digite sua profissão:");

//     const propriedades = {
//         nome: nome,
//         idade: idade,
//         profissao: profissao
//     }

//     return propriedades
// }

// console.log(getUsuario());

//2)
// function movie(a, b){
//     console.log("O primeiro filme foi lançado antes do segundo?", a.anoLancamento < b.anoLancamento);
//     console.log("O primeiro filme foi lançado no mesmo ano do segundo?", a.anoLancamento === b.anoLancamento);
// }

// const batman = {
//     nome: "Batman",
//     anoLancamento: 2022
// }

// const vingadores = {
//     nome: "Vingadores",
//     anoLancamento: 2012
// }

// movie(vingadores, batman);

// 3

// function getFruit(fruit){
//     return carrinho.push(fruit)
    
// }

// function disponibilidade(a){
//     return a.disponibilidade = !a.disponibilidade;
// }

// let carrinho = [];

// const banana = {
//     nome: "Banana",
//     disponibilidade: true
// }

// const manga = {
//     ... banana,
//     nome: "Manga",
// }

// const abacate = {
//     ... banana,
//     nome: "Abacate"
// }

// getFruit(banana);
// getFruit(manga);
// getFruit(disponibilidade(abacate));

// console.log(carrinho)