console.clear();
var pc = require('prompt-sync')();

let real
let dolar
let conv

real = +pc("Quantos R$ quer converter: ")
console.log();
console.log(`O valor a ser convertido para $ é: R$${real}`);
console.log();
dolar = +pc("Qual a cotação do dólar hoje? ");
console.log();
console.log(`A cotação do dólar para realizar a conversão é de: $${dolar}`)
console.log();
conv = parseInt(real/dolar).toFixed(2)
console.log(`A conversão deu: $${conv}`);


