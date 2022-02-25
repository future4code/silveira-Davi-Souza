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

let jogador = [comprarCarta(),comprarCarta()];
let computador = [comprarCarta(),comprarCarta()];
let pontos = [jogador[0].valor + jogador[1].valor, computador[0].valor + computador[1].valor];
let frase = `Suas cartas são ${jogador[0].texto} ${jogador[1].texto} `

let comprarMais = () => confirm(`${frase}. A carta revelada do computador é ${computador[0].texto}.\nDeseja comprar mais uma carta?`);

function adicionar(){
   for(let i = 1; i < jogador.length; i++){
         if(pontos[0] > 21){
            return;
         }
         jogador.push(comprarCarta());
         frase = frase + jogador[jogador.length - 1].texto;
         pontos[0] = pontos[0] + jogador[jogador.length - 1].valor;
      }
}

alert("Boas vindas ao jogo de Blackjack!");
    
if(confirm("Deseja iniciar o Jogo?\nSim = Ok\nNão = Cancelar")){
   if(computador[0].texto === "A" && computador[1].texto === "A") computador = [comprarCarta(),comprarCarta()];
   if(jogador[0].texto === "A" && jogador[1].texto === "A") jogador = [comprarCarta(),comprarCarta()];

   comprarMais()

   do{
      if(pontos[0] < 21 ){
         adicionar();
      }
      else{
         break;
      }
   } while(comprarMais().valueOf() !== false);
   
   if(pontos[0] > pontos[1] && pontos[0] < 22){
      console.log(`Cartas Computador: ${computador[0].texto} ${computador[1].texto} `)
      console.log(`Pontos Jogador: ${pontos[0]}\nPontos Computador: ${pontos[1]}`);
      alert("Jogador venceu!!!");
   }
   else if(pontos[0] < pontos[1]){
      console.log(`Cartas Computador: ${computador[0].texto} ${computador[1].texto} `)
      console.log(`Pontos Jogador: ${pontos[0]}\nPontos Computador: ${pontos[1]}`);
      alert("Computador venceu!!!");
   }
   else if(pontos[0] > 21){
      console.log(`Cartas Computador: ${computador[0].texto} ${computador[1].texto} `)
      console.log(`Pontos Jogador: ${pontos[0]}\nPontos Computador: ${pontos[1]}`);
      alert("Computador venceu!!!");
   }
   else{
      alert("Empate.");
   }
}
else {
   alert("O jogo acabou.");
}