type Cliente = {
    cliente: string, 
    saldoTotal: number, 
    debitos: Array<number>
};

const clientes:Array<Cliente> = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function retornaDevedores (clientes:Array<Cliente>):Array<Cliente> {
    return clientes.filter( cliente => {
        let debito:number = 0;
        for (let i = 0; i < cliente.debitos.length; i++) {
            let aux:number = cliente.debitos[i];
            debito += aux;
        }
        cliente.saldoTotal -= debito;
        return cliente.saldoTotal < 0 ? true : false;
    }).map( cliente => {
        return cliente;
    });
};

console.table(retornaDevedores(clientes));