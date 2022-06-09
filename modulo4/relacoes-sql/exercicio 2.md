### Exercício 1

Query
```
a) Resposta: É uma tabela sem um id próprio, serve apenas para representar o ator que trabalhou em determinado filme.

b)
INSERT INTO MovieCast 
VALUES(
	"004",
    "004"
);
INSERT INTO MovieCast 
VALUES(
	"004",
    "005"
);
INSERT INTO MovieCast 
VALUES(
	"004",
    "006"
);
INSERT INTO MovieCast 
VALUES(
	"001",
    "001"
);
INSERT INTO MovieCast 
VALUES(
	"001",
    "002"
);
INSERT INTO MovieCast 
VALUES(
	"002",
    "003"
);

c)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails. O mesmo erro anteriormente falado, ele tenta encontrar o id do filme ou ator para referenciar e não consegue pois é inexistente.


d)Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails. Não é possível deletar pois o ator ou filme já está sendo referenciado em outra tabela.

```