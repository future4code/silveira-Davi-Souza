// exercício 1

// a) Executar ações ou atribuições dentro da classe, para chamá-lo basta criar dentro da classe o constructor, parecido com uma função.
// b) Foi chamado uma única vez.
// c) Criando um get public dentro da classe para retornar o que desejamos.

// type Transaction = {
//     description: string,
//     value: number,
//     date: string
// }
  
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
       transaction: Transaction
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
       this.transactions.push(transaction);
    }
  
    public getCPF(): string{
        return this.cpf;
    };

    public getName(): string{
        return this.name;
    };

    public getAge(): number{
        return this.age;
    };

    public getBalance(): number{
        return this.balance;
    };

    public getTransactions(): Transaction[]{
        return this.transactions;
    };
};

// Exercício 2
  
class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string){
        this.description = description;
        this.value = value;
        this.date = date;
    };


    public getDescription(): string{
        return this.description;
    };

    public getValue(): number{
        return this.value;
    };
    
    public getDate(): string{
        return this.date;
    };
};

const purchase = new Transaction("leite, pão integral, presunto, queijo, pão de queijo.", 60, "22/01/2022");

// exercício 1: b)
const user = new UserAccount("897.456.158-20", "Rogério", 25, purchase);

// exercício 3

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]){
        this.accounts = accounts;
    };

    public getAccounts(): UserAccount[]{
        return this.accounts
    };
};

const accountsBank = new Bank([user]);

console.log(accountsBank.getAccounts());