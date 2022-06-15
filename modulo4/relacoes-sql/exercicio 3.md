### Exercício 1

Query
```
a) Resposta: ele está diretamente falando o valor da tabela que eu quero comparar entre as duas.

b)
SELECT f.nome as nome_do_filme, f.id as filme_id, r.rate as rating FROM Filmes f
INNER JOIN Rating r ON f.id = r.movie_id;

```