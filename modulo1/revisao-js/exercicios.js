// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
//  return array.reverse();
    let reverseArr = [];
    let aux = array.length - 1;
    
    for(let i = 0; i < array.length; i++){
        reverseArr[i] = array[aux];
        aux--;
    }
    return reverseArr;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b);
    // let rept = true;
    // while(rept){
    //     rept = false;
    //     for(let i = 1; i < array.length; i++){
    //         if(array[i - 1] > array[i]){
    //             [array[i - 1], array[i]] = array[i], array[i - 1];
    //             rept = true;
    //         }
    //     }
    // }
    // return array;  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    // return array.filter((item) => item % 2 == 0);
    let aux = [];
    for(item of array){
        if(item % 2 === 0){
            aux.push(item);
        }
    }
    return aux;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((item) => item % 2 == 0).map((item) => Math.pow(item, 2));
    // let aux = [];
    // for(item of array){
    //     if(item % 2 === 0)
    //         aux.push(Math.pow(item, 2));
    // }
    // return aux;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = array[0];
    array.map((item) => {
        if(item > maior) maior = item;
    })
    return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    function menor(a, b){
        if(a < b){
            return a;
        }
        else if(a > b){
            return b;
        }
        else{
            return a;
        }
    }
    maior = [num1, num2];
    return {
        maiorNumero: retornaMaiorNumero(maior),
        maiorDivisivelPorMenor: (retornaMaiorNumero(maior) % menor(num1, num2) === 0),
        diferenca: retornaMaiorNumero(maior) - menor(num1, num2)
    };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push(i * 2);
    }
    return arr;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return "Equilátero";
    }
    else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        return "Escaleno";
    }
    else{
        return "Isósceles";
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let aux = array.sort((a, b) => a - b);
    return [aux[aux.length - 2], aux[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let mensagem = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por`; 

    for (let i of filme.atores){
        mensagem += ` ${i},`;
    }
    return mensagem.slice(0, -1) + ".";
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {...pessoa, nome: "ANÔNIMO"};
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    // let arr = []
    // for(let i = 0; i < pessoas.length; i++){
    //     if(pessoas[i].altura >= 1.5 && pessoas[i].idade > 14 && pessoas[i].idade < 60){
    //         arr.push(pessoas[i]);
    //     }
    // }
    // return arr;
    return pessoas.filter((item) => {
        if(item.altura >= 1.5 && item.idade > 14 && item.idade < 60)
            return item;
    });
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((item) => {
        if(item.altura < 1.5 || item.idade <= 14 || item.idade >= 60)
            return item;
    });
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for(let item of contas){
        item.saldoTotal -= item.compras.reduce((a, b) => a += b, 0);
        item.compras = [];
    }
    return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const classificador = new Intl.Collator();
    return consultas.sort((a, b) => classificador.compare(a.nome, b.nome));
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   function data(data){
       let item = data.split('/');
       let atualizada = new Date (item[2], item[1], item[0]);
       return atualizada.getTime();
   }

   return consultas.sort((a, b) => data(a.dataDaConsulta) - data(b.dataDaConsulta));
}