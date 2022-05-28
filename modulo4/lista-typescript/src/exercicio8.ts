const data:any = new Date();

const dataNascimento:string = process.argv[2];
const dataEmissao:string = process.argv[3];

function verificaCarteira (nascimento:string, emissao:string):boolean {
    const anoAtual:number = Number(data.getFullYear());
    const idade = anoAtual - Number(nascimento.split("/", 3)[2]);
    const tempo:number = anoAtual - Number(emissao.split("/", 3)[2]);
    if(idade <= 20 && tempo >= 5){
        return true;
    }
    else if(idade > 20 && idade <= 50 && tempo >= 10){
        return true;
    }
    else if(idade > 50 && tempo >= 15){
        return true;
    }
    else {
        return false;
    }
};

console.log("precisa renovar? ", verificaCarteira(dataNascimento, dataEmissao));