const cpf:string = process.argv[2];

function soma (numero:Array<string>):number {
    let soma:number = 0;
    let index:number = 0;

    for(let i = numero.length + 1; i > 1; i--){
        soma += Number(numero[index]) * i; 
        index++;
    };
    
    return soma;
};

function numerosIguais (cpf:Array<string>):boolean {
    const novoCPF:any = new Set();

    cpf.forEach(numero => {
        novoCPF.add(numero);
    });

    console.log([...novoCPF.values()].length)

    return [...novoCPF.values()].length > 2 ? true : false;
}

function validaCPF (cpf:string) {
    const arraycpf:Array<string> = cpf.split(/[.]|[-]/,4);
    const arrayNumCPF:Array<string> = (arraycpf[0]+arraycpf[1]+arraycpf[2]).split('');
    const penultimo:number = 11 - (soma(arrayNumCPF)%11);
    const confereNumero:boolean = numerosIguais((arraycpf[0]+arraycpf[1]+arraycpf[2]+arraycpf[3]).split(''));

    if(!confereNumero){
        return false;
    }
    else {
        arrayNumCPF.push((penultimo >= 10 ? 0 : penultimo).toString());

        const ultimo:number = 11 - (soma(arrayNumCPF)%11);

        arrayNumCPF.push((ultimo >= 10 ? 0 : ultimo).toString());

        return (arrayNumCPF[9]+arrayNumCPF[10]) === arraycpf[3] ? true : false;
    }
};

console.log("CPF Válido? ",validaCPF(cpf));