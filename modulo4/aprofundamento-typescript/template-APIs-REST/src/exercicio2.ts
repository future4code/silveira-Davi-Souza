// exercício 2:
// a) Terá a entrada de um número e saída de um objeto com as estatísticas dele.
// b) numeros e numerosOrdenados são array de number; soma recebe number, estatisticas é um objeto que contém array de number e number.
// c)
// type AmostraDeDados = {

//     Numeros: number[],

//     obterEstatisticas: (numeros:number[]) => Estatisticas
// }

// type Estatisticas = {
//     maior: number,
//     menor: number,
//     media: number
// }

// function ObterEstatisticas ( numeros: number[] ):Estatisticas {

//     const numerosOrdenados:Array<number> = numeros.sort(
//         (a, b) => a - b
//     );

//     let soma:number = 0;

//     for (let num of numeros) {
//         soma += num
//     };

//     const estatisticas:Estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     };

//     return estatisticas;
// }

// console.log(ObterEstatisticas([21, 18, 65, 44, 15, 18]));