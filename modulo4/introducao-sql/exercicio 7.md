### Exercício 6
a) Resposta: 
<br>

Query:
```
a)
SELECT * FROM Filmes
WHERE nome LIKE "%vida%";

b)
SELECT * FROM Filmes
WHERE nome LIKE "%vida%" OR sinopse LIKE "%vida%";

c) 
SELECT * FROM Filmes
WHERE data_de_lancamento < "2022/06/06";

d)
SELECT * FROM Filmes
WHERE data_de_lancamento < "2022/06/06" 
AND (nome LIKE "%vida%" OR sinopse LIKE "%vida%")
AND avaliacao > 7;

```