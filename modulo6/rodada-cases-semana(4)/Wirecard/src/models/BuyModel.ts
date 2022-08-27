export class BuyModel {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private cpf: number
    ){};

    public getId() {
        return this.id;
    };

    public getName() {
        return this.name;
    };

    public getEmail() {
        return this.email;
    };

    public getCpf() {
        return this.cpf;
    };

    public static hawBuyModel(buyer: any): BuyModel {
        return new BuyModel(buyer.id, buyer.name, buyer.email, buyer.cpf);
    };
};

export interface InputAddBuy{
    name: string,
    email: string,
    cpf: number
};