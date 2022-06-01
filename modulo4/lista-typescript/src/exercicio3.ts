const nomeFilme:string = process.argv[2];
const anoLancamentoFilme:number = Number(process.argv[3]);
const generoFilme:string = process.argv[4];
const pontuacaoFilme:number = Number(process.argv[2]);

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
};

type Filme = {
    nome: string,
    anoLancamento: number,
    genero: GENERO,
    pontuacao?: number
};

function adicionaFilme ( nome: string, anoLancamento: number, genero:string, pontuacao?: number):Filme {
	let generoFilme:GENERO;
	switch (genero) {
		case "ação":
			generoFilme = GENERO.ACAO;
			break;
		case "drama":
			generoFilme = GENERO.DRAMA
			break;
		case "comédia":
			generoFilme = GENERO.COMEDIA
			break;
		case "romance":
			generoFilme = GENERO.ROMANCE
			break;
		case "terror":
			generoFilme = GENERO.TERROR
			break;
		default:
			generoFilme = GENERO.ACAO
			break;
	};

	const newFilm:Filme = {
		nome: nome,
		anoLancamento: anoLancamento,
		genero: generoFilme,
		pontuacao: pontuacao
	};

	return newFilm;
};

console.log(adicionaFilme(nomeFilme, anoLancamentoFilme, generoFilme, pontuacaoFilme));