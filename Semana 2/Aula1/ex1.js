console.clear();
const pc = require('prompt-sync')();

var n
var cont = 0

var numeros = [];
var numero_par = [];
var numero_impar = [];

while (cont != 20)
{
    n = pc("Digite um numero: ")
    cont++
    numeros.push(n);
    if((n%2) == 0)
    {
        numero_par.push(n);
    } else
    {
        numero_impar.push(n);
    }
}

console.log(`Os numeros foram: ${numeros}`);
console.log();
console.log(`Os numeros pares foram: ${numero_par}`);
console.log();
console.log(`Os numeros impares foram: ${numero_impar}`);



