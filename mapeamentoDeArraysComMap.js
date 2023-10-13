// Usando map para mapear um array de objetos para um array de números

// A map altera os valores do array
// A map retorna um novo array com os valores alterados

const numeros = [11, 21, 3, 4, 51, 61, 7, 8, 90];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log("Numeros em dobro > ", numerosEmDobro); // [ 22, 42, 6, 8, 102, 122, 14, 16, 180 ]

// map mapea os valores do array de numeros para um array de objetos

// Aqui são as regras de negocio
// Para cada elemento:
// Se o elemento for maior que 10, retorne o elemento
// Retorna apenas uma string com o noma da pessoa
// Remova apenas a chave nome do objeto
// Adiciona apenas a chave id  em cada objeto (id = indice do array)
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

// retorna so o nome
const nomes = pessoas.map(obj => obj.nome);
console.log("Nomes > ", nomes);

// retorna so a idade
const idades = pessoas.map(obj => obj.idade);
console.log("Idades > ", idades);

// retorna so o nome e a idade
const nomesEIdades = pessoas.map(obj => ({nome: obj.nome, idade: obj.idade}));
//console.log("Nomes e Idades > ", nomesEIdades);

// retorna so o nome e a idade com id
const nomesEIdadesComId = pessoas.map((obj, indice) => ({id: indice, nome: obj.nome, idade: obj.idade}));
//console.log("Nomes e Idades com id > ", nomesEIdadesComId);

// retorna so o nome e a idade com id usando obj e indice
const nomesEIdadesComId2 = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});

console.log("Nomes e Idades com id 2 > ", nomesEIdadesComId2);





