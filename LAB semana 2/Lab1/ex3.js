console.clear()
var pc = require('prompt-sync')();

cont = 0
let numeros = []
while (cont < 20)
{
    cont++
    var sort = Math.floor(Math.random()* 101)
    numeros.push(sort)
}

numeros.sort((a, b) => b - a);
console.log(numeros)