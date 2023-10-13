// Concatenação com Spread com objetos
const objeto1 = { nome: "João", idade: 25};
const objeto2 = { nome: "Maria", idade: 27};
const objeto3 = { nome: "José", idade: 30};
//const objeto4 = {...objeto1, objeto2, objeto3};
const objeto4 = {};

//Iterando no objeto4
for(let propriedade in objeto1){
    
    let valor = objeto4[propriedade];
    console.log("Iterando no objeto > ", valor);

    for(let propriedade2 in objeto2){
        let valor2 = objeto4[propriedade2];
        console.log("Iterando no objeto4 > ", valor2); 

        for(let propriedade3 in objeto3){
            let valor3 = objeto4[propriedade3];
            console.log("Iterando no objeto4 > ", valor3);

        }
    }
}


//const array1 = [ 1, 2, 3 ];
//const array2 = [4, 5, 6];
//const array3 = [7, 8, 9];

// exibindo o objeto4
//console.log("Concatenação de objetos com Spread > ", objeto4); // { nome: 'José', idade: 30 }
// Concatenação normal
//const array4 = array1.concat(array2, array3);
//const array5 = array1.concat(array2, array3, ["a", "b", "c"]);
// Concatenação com Spread
//const array6 = [...array1, ...array2, ...array3];
//console.log("Concatenação com Spread > ", array6); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
//console.log("Concatenação normal > ",array5); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
//console.log("Concatenação normal > ",array4); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]