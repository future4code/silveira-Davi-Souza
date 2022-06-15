### Exercício 3
c) Resposta: Retornou uma linha com tudo nulo, ou seja, sem retorno, pois não há na tabela o valor requerido.
<br>

e) Resposta: Unknow columns 'nome' in 'field list'(
Colunas desconhecidas 'nome' na 'lista de campos'). O campo nome está errado, na tabela existe apenas o campo 'name'.

Query:
```
a)
SELECT * FROM Actor WHERE gender = "female";

b)
SELECT salary FROM Actor WHERE name = "Tony Ramos";

c) 
SELECT * FROM Actor WHERE gender = "invalid";

d)
SELECT id, name, salary FROM Actor WHERE salary < 500000 OR salary = 500000;

e) 
SELECT id, name FROM Actor WHERE id = "002";
```