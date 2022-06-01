//como fazemos para acessar os parâmetros passados na linha de comando para o Node? Utilizando o process.argv

const name = process.argv[2];
const age = Number(process.argv[3]);

console.log(`Olá, ${name}! Você tem ${age} anos.`);

console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}`);
