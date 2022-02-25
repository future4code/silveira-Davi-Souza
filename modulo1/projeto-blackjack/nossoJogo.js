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

console.log("Boas vindas ao jogo de Blackjack!");

if(confirm("Deseja iniciar o Jogo?\nSim = Ok\nNão = Cancelar")){
   console.log(`Jogador - cartas: ${jogador[0].texto} ${jogador[1].texto}  - \npontuação ${pontos[0]}`);
   console.log(`Computador - cartas: ${computador[0].texto} ${computador[1].texto}  - \npontuação ${pontos[1]}`);

   if(pontos[0] > pontos[1]){
      console.log("Jogador venceu!!!\nRecarregue a página para jogar novamente.");
   }
   else if(pontos[0] < pontos[1]){
      console.log("Computador venceu!!!\nRecarregue a página para jogar novamente.");
   }
   else{
      console.log("Empate\nRecarregue a página para jogar novamente.");
   }
}
else {
   console.log("O jogo acabou.\nRecarregue a página para jogar novamente.");
}

