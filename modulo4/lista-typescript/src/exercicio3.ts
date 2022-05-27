const nomeFilme:string = process.argv[2];
const anoLancamentoFilme:number = Number(process.argv[3]);
const generoFilme:string = process.argv[4];
const pontuacaoFilme:string = process.argv[2];

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao?: number
}

