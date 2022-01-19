console.clear();
const pc = require('prompt-sync')();

let n1 
let n2

n1 = +pc(`Digite a primeira nota: `);
n2 = +pc(`Digite a segunda nota: `);

console.log(`A média das notas é ${(n1*4 + n2*6)/10}`);