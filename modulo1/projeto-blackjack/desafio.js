/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let jogador = [comprarCarta(),comprarCarta()];;
let computador = [comprarCarta(),comprarCarta()];;
let pontos = [jogador[0].valor + jogador[1].valor, computador[0].valor + computador[1].valor];
let frase = `${jogador[0].texto} ${jogador[1].texto}`;
let confirma;
let start;

let comprarMais = () => confirm(
   `Suas cartas são ${frase}. A carta revelada do computador é ${computador[0].texto}.
   \nDeseja comprar mais uma carta?`);

function adicionar(arr){
   if(pontos[0] >= 21){
      return;
   }
   arr.push(comprarCarta());
   frase = frase + ` ${arr[arr.length - 1].texto}`;
   pontos[0] = pontos[0] + arr[arr.length - 1].valor;
   return;
}

function compara(arr){
   if(arr[0].texto.indexOf("A") === "A" && arr[1].texto.indexOf("A") === "A") 
      return arr = [comprarCarta(),comprarCarta()];
   return
}

function resultado(array){
   if(array[0] > array[1] && array[0] < 22){
      return alert("Você venceu!!!");
   }
   else if(array[0] < array[1]){
      return alert("Computador venceu!!!");
   }
   else if(array[0] > 21){
      return alert("Computador venceu!!!");
   }
   else{
      return alert("Empate.");
   }
}

alert("Boas vindas ao jogo de Blackjack!");

if(confirm("Deseja iniciar o jogo?\nSim = Ok\nNão = Cancelar")){
   compara(jogador);
   compara(computador);
   
   confirma = comprarMais();

   do{
      if(pontos[0] < 21 && confirma){
         adicionar(jogador);
      }
      else{
         break;
      }
   } while(comprarMais());

   alert(`${frase}. A carta revelada do computador é ${computador[0].texto}.`);
   
   resultado(pontos);
   console.log(`Cartas Jogador: ${frase}`);
   console.log(`Pontos Computador: ${computador[0].valor} + ${computador[1].valor}`);
   console.log(`Cartas Computador: ${computador[0].texto} ${computador[1].texto} `);
   console.log(`Pontos Jogador: ${pontos[0]}\nPontos Computador: ${pontos[1]}`);
}

alert("O jogo acabou. \nRecarregue a página para recomeçar!");