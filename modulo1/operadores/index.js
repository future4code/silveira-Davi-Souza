//Exercícios de interpretação de código
//1)
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) ==> a. false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) ==> b. false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) ==> c. true

// console.log("d. ", typeof resultado) ==> d. boolean

//2)
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma) ==> será concatenado os valores, pois não houve conversão dos dois primeiros strings para número.

//3)
// let primeiroNumero = Number(prompt("Digite um numero!"));
// let segundoNumero = Number(prompt("Digite outro numero!"));

// const soma = primeiroNumero + segundoNumero;

// console.log(soma);

//Exercícios de escrita de código
//1)

// let idade = Number(prompt("Qual é a sua idade?"));
// let idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"));
// let diferenca = idade - idadeAmigo;

// console.log("Sua idade é maior que a do seu amigo?", idade > idadeAmigo);
// console.log("A diferença de idade entre vocês é de:", diferenca); 

//2)

// let numero = Number(prompt("Digite um número par:"));

// let resto = numero % 2;

// console.log("O resto é:", resto); //==> o resto sempre será 0 se o número for par, mas será 1 se for ímpar.

//3)

// let idade = Number(prompt("Quantos anos você tem?"));

// let meses = 12 * idade;
// let dias = 365 * idade;
// let horas = 24 * dias;

// console.log("Você tem",meses,"meses de vida.");
// console.log("Você tem",dias,"dias de vida.");
// console.log("Você tem",horas,"horas de vida.");

//4)

// let num1 = Number(prompt("Digite um número:"));
// let num2 = Number(prompt("Digite outro número:"));

// console.log("O primeiro numero é maior que o segundo?", num1 > num2);
// console.log("O primeiro numero é igual ao segundo?", num1 === num2);
// console.log("O primeiro numero é divisível pelo segundo?", num1 % num2 === 0 );
// console.log("O segundo numero é divisível pelo primeiro?", num2 % num1 === 0);

//DESAFIO
//1)
// console.log("77 °F em Kelvin fica:", (77 - 32)*(5/9) + 273.15, "K");
// console.log("80 °C em Fahrenheit fica:", (80)*(9/5) + 32, "°F");
// let C = 30;

// let F = (C)*(9/5) + 32;
// let K = (F - 32)*(5/9) + 273.15;

// console.log("30 °C em Fahrenheit e Kelvin fica:", F,"°F",K, "K");

// C = Number(prompt("Digite a temperatura atual:"));

// F = (C)*(9/5) + 32;
// K = (F - 32)*(5/9) + 273.15;

// console.log(C,"°C em Fahrenheit e Kelvin fica:", F,"°F",K, "K");

//2)

// let consumo = 30 * (24 * (280 * 0.05));
// let valorDescontado = consumo - (15 * (consumo / 100));

// console.log("Valor total da fatura de luz:", consumo);
// console.log("Valor total da fatura de luz com desconto de 15%:", valorDescontado);

//3)

// //A:
// console.log("20lb equivalem a", 20 / 2.205,"kg");
// //B
// console.log("10.5oz equivalem a", 10.5 / 3.527,"kg");
// //C
// console.log("100mi equivalem a", 100 * 1609,"m");
// //D
// console.log("50ft equivalem a", 50 / 3.281,"m");
// //E
// console.log("103.56gal equivalem a", 103.56 * 379,"l");
// //F
// console.log("450 xic equivalem a", 450 / 3.52,"l");