### Exercício 2
a) Resposta:
<br>
b) Resposta: Duplicate entry '002' for key 'PRIMARY'(
Entrada duplicada '002' para a chave 'PRIMARY'), esse erro acontece pois *id* é uma chave primária, um identificador daquele objeto, ele deve ser único.
<br>
c) Resposta: Column count doesn't match value count at row 1(A contagem de colunas não corresponde à contagem de valores na linha 1). O erro está dizendo que os valores que tentamos inserir não correspondem com os parâmetros passados.
<br>
d) Resposta: Field 'name' doesn't have a default value(O campo 'nome' não tem um valor padrão). Nome não está sendo passado e é um valor que não pode ser null.
<br>
e) Resposta: Incorrect date value(
Valor de data incorreto). O valor não está sendo passado entre aspas.
<br>
c) Query:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
	"Glória Pires",
    1200000,
    "1963/08/23",
    "female"
);

b) 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
	"Roberto Carlos",
    12000000000,
    "0001/01/01",
    "male"
);

c) 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d) 
INSERT INTO Actor (id, name,salary, birth_date, gender)
VALUES(
	"004",
	"Antônio Fagundes",
	400000,
	"1949-04-18", 
	"male"
);

e) 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"005", 
	"Juliana Paes",
	719333.33,
	"1979-03-26", 
	"female"
);
```