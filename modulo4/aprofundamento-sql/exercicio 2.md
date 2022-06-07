### Exercício 2
Query
```
a)
UPDATE Actor 
SET name = "Moacyr Franco", birth_date = "2020-02-10"
WHERE id = "003";

b)
UPDATE Actor
SET name = UPPER(name) 
WHERE name LIKE "juliana paes";

UPDATE Actor
SET name = "Juliana Paes" 
WHERE name LIKE "juliana paes";

c)
UPDATE Actor
SET name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male"
WHERE id = "005";
```