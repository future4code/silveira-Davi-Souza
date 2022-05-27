
const nome:string = process.argv[2];
const nascimento:string = process.argv[3];

function contaNome ( name: string, data: string ):string {
    const newData:string[] = data.split("/",3);
    return `Olá me chamo ${name}, nasci no dia ${newData[0]} do mês ${newData[1]} do ano de ${newData[2]}`;
};

console.log(contaNome(nome, nascimento));