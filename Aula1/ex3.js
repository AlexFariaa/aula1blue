console.clear();
const pc = require('prompt-sync')();

let ano
let mes
let dia

ano = +pc("Quantos anos você tem? ");
mes = +pc("Quantos meses? ");
dia = +pc("Quantos dias? ");

console.log(`Você ja viveu: ${ano*365 + mes*30 + dia} Dias.`);


