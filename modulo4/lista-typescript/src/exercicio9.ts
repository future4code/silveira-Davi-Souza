const palavra:string = process.argv[2];

function anagrama (palavra:string):number {
    const arrayPalavra:Array<string> = palavra.split('');
    const novoArray:any = new Set();
    let fatorial:number = 1;

    arrayPalavra.forEach(letra => {
        novoArray.add(letra);
    })

    for(let i = [... novoArray.values()].length; i > 1; i--){
        fatorial *= i;
    }

    return fatorial;
}

console.log(anagrama(palavra));