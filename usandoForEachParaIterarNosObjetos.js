// Usando forEach para iterar nos objetos
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

// forEach so e usado em arrays
// for(let i = 0; i < pessoas.length; i++) {
//     console.log(pessoas[i]);
// }

pessoas.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

//console.log("Usando forEach para iterar nos objetos > ", pessoas);

// usando forEach para iterar nos objetos junto com reducer
const total = pessoas.reduce(
    function(acumulador, valor, indice, array) {
        acumulador += valor.idade;
        return acumulador;
    }, 0);
console.log("Total > ", total);