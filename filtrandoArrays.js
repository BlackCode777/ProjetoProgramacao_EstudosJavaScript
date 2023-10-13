//filtrando arrays

// filter, map, reduce

// filter
// filter vai filtrar o array e retornar um novo array com os elementos filtrados

// map
// map vai mapear o array e retornar um novo array com os elementos mapeados

// reduce
// reduce vai reduzir o array e retornar um novo array com os elementos reduzidos

const numeros = [11, 21, 3, 4, 51, 61, 7, 8, 90];
function callBackFilter( valor ){return valor > 10}
//filtrando elementos maiores que 10 com função de callback
const filtrados = numeros.filter(callBackFilter);
//filtrando elementos maiores que 10 usando arrow function
const filtrados2 = numeros.filter(valor => valor > 10);
console.log("Filtrados > ", filtrados); // [ 11, 21, 51, 61, 90 ]

/****************************************************************/

// cadas indice aqui é um objetos
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];	

// filtrando pessoas com mais de 5 letras no nome
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log("Pessoas com nome grande > ", pessoasComNomeGrande);

// filtrando pessoas com mais de 50 anos
const pessoasComMaisDe50Anos = pessoas.filter(obj => obj.idade > 50);
console.log("Pessoas com mais de 50 anos > ", pessoasComMaisDe50Anos);

// filtrando pessoas com nome terminado em a
const pessoasComNomeTerminadoEmA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log("Pessoas com nome terminado em a > ", pessoasComNomeTerminadoEmA);

// filtrando pessoas com nome terminado em a e com mais de 30 anos
const pessoasComNomeTerminadoEmAEMaisDe30Anos = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a') && obj.idade > 30);
console.log("Pessoas com nome terminado em a e com mais de 30 anos > ", pessoasComNomeTerminadoEmAEMaisDe30Anos);

// filtrando pessoas com nome terminado em e ou com mais de 30 anos
const pessoasComNomeTerminadoEmEOuMaisDe30Anos = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('e') || obj.idade > 30);
console.log("Pessoas com nome terminado em e ou com mais de 30 anos > ", pessoasComNomeTerminadoEmEOuMaisDe30Anos);

// filtrando pessoas com nome Iniciado com e ou com mais de 40 anos
const pessoasComNomeIniciadoComEOuMaisDe40Anos = pessoas.filter(obj => obj.nome.toLowerCase().startsWith('e') || obj.idade > 40);
console.log("Pessoas com nome iniciado com e ou com mais de 40 anos > ", pessoasComNomeIniciadoComEOuMaisDe40Anos);