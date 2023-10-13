// Unindo o reducer, map e o filter

const numeros = [11, 21, 3, 4, 51, 61, 7, 8, 90];

// usando filter
const numerosPares = numeros.filter(valor => valor % 2 === 0);
console.log("Numeros pares > ", numerosPares);

// usando map e filter
const numerosParesEmDobro = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2);
console.log("Numeros pares em dobro > ", numerosParesEmDobro);

// usando map, filter e reduce
const numerosParesEmDobroSomados = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor);
console.log("Numeros pares em dobro somados > ", numerosParesEmDobroSomados);

const total = numeros.reduce(
    function(acumulador, valor, indice, array) {
        acumulador += valor;
        console.log("Acumulador > ", acumulador, valor);
        return acumulador;
    }, 0);
console.log("Total > ", total);

