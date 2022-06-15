### Exercício 1

Query
```
a) Resposta: É um id referenciando outra tabela. 

b)
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"001",
    "Esse filme é sensacional!!!!!!",
    10,
    "004"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"002",
    "Esse filme é bom, porém ainda falta algo nele",
    7.5,
    "002"
);

c)Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails. O erro aponta que a foreign key falhou, ou seja não existe.

d) ALTER TABLE Filmes DROP COLUMN avaliacao;

e)
DELETE FROM Filmes
WHERE id = "002";
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails. Um erro parecido com o anterior, porém não foi possível deletar pois o filme está sendo referenciado em outra tabela.
```