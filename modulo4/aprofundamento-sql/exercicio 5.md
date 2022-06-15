### Exercício 5
a) Resposta: faz a soma por genero e agrupa os diferentes gerenos existentes na tabela.

Query
```
b)
SELECT id, name FROM Actor 
ORDER BY name DESC;

c)
SELECT * FROM Actor 
ORDER BY salary ASC;

d)
SELECT * FROM Actor 
ORDER BY salary DESC
LIMIT 3;

e)
SELECT gender, AVG(salary) FROM Actor
GROUP BY gender;
```