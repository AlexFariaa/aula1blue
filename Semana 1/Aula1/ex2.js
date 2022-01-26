console.clear();
const pc = require('prompt-sync')();

let peca
let num_peça
let preço


peca = pc("Qual o nome da peça? ");
num_peça = +pc("Quantas peças você quer levar? ");
preço = +pc("Qual o valor de cada peça? ");

console.log(`Você esta levando ${num_peça} ${peca}(s) pelo valor de R$${preço} cada uma, deu um total de: R$${num_peça*preço}.`)
console.log() 

let peca1
let num_peça1
let preço1

peca1 = pc("Qual o nome da outra peça? ");
num_peça1 = +pc("Quantas peças você quer levar? ");
preço1 = +pc("Qual o valor de cada peça? ");

console.log(`Você esta levando ${num_peça1} ${peca1}(s) pelo valor de R$${preço1} cada uma, deu um total de: R$${num_peça1*preço1}.`)
console.log();
console.log(`A soma dos valores deu R$${(num_peça*preço)+(num_peça1*preço1)}`);
