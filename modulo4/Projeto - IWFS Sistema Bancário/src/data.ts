export type User = {
    name: string,
    cpf: string,
    data: string,
    saldo: number,
    extrato?: Extrato[]
};

export type Extrato = {
    valor: number,
    data?: string,
    descricao: string 
};

export const users: User[] = [
    {
        name: "José Almeida",
        cpf: "865.485.654-20",
        data: "15/08/1990",
        saldo: 150,
        extrato: [
            {
                valor: 500,
                data: "10/05/2022",
                descricao: "Conta de luz" 
            },
            {
                valor: 300,
                data: "10/05/2022",
                descricao: "Conta de água" 
            }
        ]
    },
    {
        name: "Paulo Alberto",
        cpf: "854.965.452-02",
        data: "25/04/1985",
        saldo: 2578,
        extrato: [
            {
                valor: 150,
                data: "05/05/2022",
                descricao: "Conta de internet" 
            },
            {
                valor: 200,
                data: "05/05/2022",
                descricao: "Conta de água" 
            }
        ]
    },
    {
        name: "Joana Santos",
        cpf: "965.045.899-45",
        data: "13/01/1999",
        saldo: 1600
    },
    {
        name: "Larissa Silveira",
        cpf: "684.951.357-26",
        data: "24/09/2000",
        saldo: 2254,
        extrato: [
            {
                valor: 153,
                data: "25/05/2022",
                descricao: "Restaurante" 
            },
            {
                valor: 450,
                data: "03/06/2022",
                descricao: "Mercado" 
            },
            {
                valor: 100,
                data: "01/06/2022",
                descricao: "Conta de Internet" 
            }
        ]
    }
]