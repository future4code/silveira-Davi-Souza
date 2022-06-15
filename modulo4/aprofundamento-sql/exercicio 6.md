### Exercício 6

Query
```
a) 
ALTER TABLE Filmes ADD playing_limit_date DATE;

b)
ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;

c)
UPDATE Filmes
SET playing_limit_date = CURDATE()
WHERE id = "004";

UPDATE Filmes
SET playing_limit_date = "2021/08/05"
WHERE id = "001";

d) Resposta: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0. Ele executou o comando, porém não encontrou nenhuma linha com o id determinado, então na prática não fez alterações na tabela.

```