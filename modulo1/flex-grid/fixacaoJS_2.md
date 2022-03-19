```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let arrayNumero = arrayDeNumeros.filter(a => a === numeroEscolhido);
    if(arrayNumeros.length === 0){
        return 'Número não encontrado';
    }
    return `O número ${numeroEscolhido} aparece ${arrayNumero.length}x`;
}
```