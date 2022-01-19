console.clear();
const pc = require('prompt-sync')();

let idade

idade = +pc("Quantos anos (em dias) você tem? ");

let ano = parseInt(idade/365);
console.log(`Você tem: ${ano} anos.`);

idade = idade - ano*365

let mes = parseInt(idade/30);
console.log(`Você tem: ${mes} meses`);

idade = idade - mes*30

console.log(`Você tem: ${idade} dias`);