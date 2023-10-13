// reducer é uma função que recebe um acumulador e um valores

// o acumulador é o valor retornado na ultima execução da função
// o valor é o valor atual da iteração

// o acumulador pode ser um array, um objeto, um número, uma string, etc
// ele consegue somar todos os valores de um array, por exemplo
// ele reduz todos os elemento do array

const numeros = [11, 21, 3, 4, 51, 61, 7, 8, 90];

const total = numeros.reduce(
    function(acumulador, valor, indice, array) {
        acumulador += valor;
        console.log("Acumulador > ", acumulador, valor);
        return acumulador;
    }, 0);
//console.log("Total > ", total);

// retornar um array com  valores pares
const pares = numeros.reduce(
    function(acumulador, valor, indice, array) {
        if(valor % 2 === 0) acumulador.push(valor);
        return acumulador;
    }, []);
//console.log("Pares > ", pares);

// retornar um array com  valores impares
const impares = numeros.reduce(
    function(acumulador, valor, indice, array) {
        if(valor % 2 !== 0) acumulador.push(valor);
        return acumulador;
    }, []);
//console.log("Impares > ", impares);

// Trabalhando com json
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

// retornar a pessoa mais velha
const pessoaMaisVelha = pessoas.reduce(
    function(acumulador, valor) {
        if(acumulador.idade > valor.idade) return acumulador;
        return valor;
    });
console.log("Pessoa mais velha > ", pessoaMaisVelha);