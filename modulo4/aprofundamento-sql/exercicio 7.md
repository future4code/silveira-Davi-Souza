### Exercício 7

Query
```
a) 
SELECT COUNT(*) FROM Filmes
WHERE avaliacao > 7.5;

b)
SELECT AVG(avaliacao) FROM Filmes;

c)
SELECT COUNT(*) FROM Filmes
WHERE playing_limit_date = CURDATE();

d) 
SELECT COUNT(*) FROM Filmes
WHERE playing_limit_date > CURDATE();

e)
SELECT MAX(avaliacao) FROM Filmes;

f)
SELECT MIN(avaliacao) FROM Filmes;
```