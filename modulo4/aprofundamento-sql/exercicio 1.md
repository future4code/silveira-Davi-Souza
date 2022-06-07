### Exercício 1
a) Resposta: Tira da tabela a coluna "salary".
<br>

b) Resposta: Altera o campo "gender" para "sex", e define um *VARCHAR* de 6 caracteres.
<br>

c) Resposta: Erro pois "gender" foi alterado anteriormente para "sex".
<br>

d) Resposta: 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```