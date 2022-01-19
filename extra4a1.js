console.clear();
const pc = require('prompt-sync')();

let a1
let a2
let a3
let a4
let n1
let n2
let n3
let n4

a1 = pc("Qual o nome do primeiro aluno? ");
n1 = +pc("Qual a nota do primeiro aluno? ");
console.log()
a2 = pc("Qual o nome do segundo aluno? ");
n2 = +pc("Qual a nota do segundo aluno? ");
console.log()
a3 = pc("Qual o nome do terceiro aluno? ");
n3 = +pc("Qual a nota do terceiro aluno? ");
console.log()
a4 = pc("Qual o nome do quarto aluno? ");
n4 = +pc("Qual a nota do quarto aluno? ");
console.log()
console.log(`A nota de ${a1} foi de: ${n1}.`);
console.log()
console.log(`A nota de ${a2} foi de: ${n2}.`);
console.log()
console.log(`A nota de ${a3} foi de: ${n3}.`);
console.log()
console.log(`A nota de ${a4} foi de: ${n4}.`);
console.log()


