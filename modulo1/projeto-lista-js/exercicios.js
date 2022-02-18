// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let alt = Number(prompt("Digite a Altura:"));
  let largura = Number(prompt("Digite a Largura:"));

  console.log(alt * largura);

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual:"));
  let anoNascimento = Number(prompt("Digite seu ano de nascimento:"));

  console.log(anoAtual - anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Digite o seu nome:");
  let idade = Number(prompt("Digite a sua idade:"));
  let email = prompt("Digite o seu e-mail:");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cores = [prompt("Digite uma cor:"),prompt("Digite uma cor:"),prompt("Digite uma cor:")];

  console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let auxiliar = array[0]
  array[0] = array[array.length - 1];
  array[array.length - 1] = auxiliar

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual:"));
  let anoNascimento = Number(prompt("Digite seu ano de nascimento:"));
  let carteira = Number(prompt("Digite seu ano de nascimento:"));
  
  // let compara1 = (anoAtual - anoNascimento) <= 20 && (anoAtual - carteira) >= 5;
  // let compara2 = (anoAtual - anoNascimento) > 20 && (anoAtual - anoNascimento) <= 50 && (anoAtual - carteira) >= 10;
  // let compara3 = (anoAtual - anoNascimento) > 50 && (anoAtual - carteira) >= 15;

  // console.log(compara1  || compara2 || compara3);

  //maneira resumida de fazer abaixo:

  console.log(((anoAtual - anoNascimento) <= 20 && (anoAtual - carteira) >= 5)  || ((anoAtual - anoNascimento) > 20 && (anoAtual - anoNascimento) <= 50 && (anoAtual - carteira) >= 10) || ((anoAtual - anoNascimento) > 50 && (anoAtual - carteira) >= 15));
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return ano % 400 === 0 || (ano % 4 === 0 && ano % 100 != 0)  ;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let maior18 = prompt("Você tem mais de 18 anos?");
  let ensMedio = prompt("Você possui ensino médio completo?");
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");

  console.log(maior18 === "sim" && ensMedio === "sim" && disponibilidade === "sim");
}