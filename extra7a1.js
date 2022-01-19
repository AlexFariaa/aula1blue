console.clear();
var pc = require('prompt-sync')();

let conta
let taxa
let total

conta = +pc("Qual o valor total da conta a pagar? ");
console.log();
console.log(`Valor da conta: R$${conta}`);
console.log();
taxa = +pc("Qual o valor da taxa que quer cobrar em %? ");
console.log();
console.log(`Taxa de: ${taxa}%`);
console.log();
console.log(`A conta deu R$${conta} e com as taxas de ${taxa}%\nFicou: R$${(conta*(taxa/100))+conta}`);
