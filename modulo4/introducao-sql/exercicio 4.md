### Exercício 4
a) A query irá retornar o valor onde os dados especificados serão compatíveis, caso contrário não terá retorno.

Query:
```
a)
SELECT * FROM Actor 
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

b) 
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

c)
SELECT * FROM Actor
WHERE name LIKE "%G%";

d)
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;
```