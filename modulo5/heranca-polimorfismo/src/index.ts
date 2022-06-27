// Herança
// Exercício 1
// a) Sim.
// b) Apenas uma única vez.

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
    public introduceYourself: string;

    constructor(
          id: string,
          email: string,
          name: string,
          password: string,
          introduceYourself: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id;
          this.email = email;
          this.name = name;
          this.password = password;
          this.introduceYourself = introduceYourself;
      };
  
      public getId(): string {
          return this.id;
      };
  
      public getEmail(): string {
          return this.email;
      };
  
      public getName(): string {
          return this.name;
      };

      public getIntroduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`!;
      };
};

const user = new User("001", "usuario@hotmail.com", "usuario", "12315648", "Olá, bom dia!");

// Exercício 2
// a) Uma única vez.
// b) Duas vezes pois eu de criei dois usuários, uma vez veio do usuário que contém User e a segunda veio da herança do Customer com User.

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string,
        introduceYourself: string
    ) {
        super(id, email, name, password, introduceYourself);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
        return this.creditCard;
    }

    public getPurchaseTotal(): number {
        return this.purchaseTotal;
    }
}

const user2 = new Customer("001", "usuario@hotmail.com", "usuario", "12315648", "R$25.00", "Olá, bom dia!");

// Exercício 3
// a) Técnicamente não pois não tem um get de password, mas eu consigo imprimir o objeto user2 e ver todas as informações incluindo a senha.

console.log(user2.getId());
console.log(user2.getName());
console.log(user2.getEmail());
console.log(user2.getCreditCard());
console.log(user2.getPurchaseTotal());
console.log(user2);

// Exercício 4

console.log(user2.getIntroduceYourself());
// retorno: Olá, bom dia!

// Exercício 5

console.log(user2.getIntroduceYourself());
// retorno: Olá, sou usuario. Bom dia!

// Polimorfismo
// Exercício 1
// a) Consegui imprimir todas as propriedades.

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
}

const cliente: Client = {
    name: "Gabriel",
    registrationNumber: 1,
    consumedEnergy: 150,

    calculateBill: () => {
        return 2;
    }
};

console.log(
    "Nome:", cliente.name,
    "Registro:", cliente.registrationNumber,
    "Consumo:", cliente.consumedEnergy,
    "Calculo:", cliente.calculateBill()
);

// Exercício 2
// a) Não é possível criar uma instância de uma classe abstrata.
// b) para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

export abstract class Place {
    constructor(protected cep: string) {}
  
    public getCep(): string {
        return this.cep;
    }
}

// const cliente2 = new Place("")

// Exercício 3

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    };

    public getResidentsQuantity(): number {
        return this.residentsQuantity;
    };
};

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    };

    public getFloorsQuantity(): number {
        return this.floorsQuantity;
    };
};

export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
    ) {
        super(cep);
    };

    public getMachineQuantity(): number {
        return this.machinesQuantity;
    };
};

// Exercício 4 
// a) Métodos e propriedades abaixo. Pois ela está estendendo Residence e implementando Client. 
class ResidentialClient extends Commerce implements Client{
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ){
        super(residentsQuantity, cep);
    };

    public getCpf(): string {
        return this.cpf;
    };
    
    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    };
};

// Exercício 5
// a) Ela tem uma estrutura parecida e tem propriedades semelhantes.
// b) Ela estende uma classe diferente, tem um calculo menor, e possui cnpj.

class CommercialClient extends Commerce implements Client{
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ){
        super(floorsQuantity, cep);
    };

    public getCnpj(): string {
        return this.cnpj;
    };
    
    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    };
};

// Exercício 6
// a) Da classe Industry, por que foi criada pensando no setor industrial, ou seja, tem propriedades de acordo.
// b) A interface Client, pois todas fazem parte de um sistema de contas de energia para a mesma empresa, mudando apenas o tipo de local. 
// c) Pois não é necessário no momento fazer modificações, é uma classe de conta de energia.

class IndustrialClinet extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private insdustryNumber: number,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep);
    };

    public getIndustryNumber(): number {
        return this.insdustryNumber;
    };

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    };
};
