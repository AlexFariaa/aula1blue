console.clear();
const pc = require('prompt-sync')();

var idade
var alt

var i = []
var a = []
var cont = 0

while (cont != 5)
{
    cont++
    idade = +pc(`Qual a idade da ${cont}ª pessoa? `);
    alt = pc(`Qual a altura da ${cont}ª pessoa? `);
    i.push(idade);
    a.push(alt);
    console.clear
}

console.log(i);
console.log(a);