[
    {letra: "M", valor: 1000},
    {letra: "CM", valor: 900},
    {letra: "D", valor: 500},
    {letra: "CD", valor: 400},
    {letra: "C", valor: 100},
    {letra: "XC", valor: 90},
    {letra: "L", valor: 50},
    {letra: "XL", valor: 40},
    {letra: "C", valor: 10},
    {letra: "IX", valor: 9},
    {letra: "V", valor: 5},
    {letra: "IV", valor: 4},
    {letra: "I", valor: 1}
];

function converteParaRomanos (valor:string) {
    const numeroString:string = valor.replace(/[^0-9]/, "");
    if(numeroString == '') 
        return'Inválido';
};