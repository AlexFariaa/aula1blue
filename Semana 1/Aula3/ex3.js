console.clear()
var pc = require('prompt-sync')();

//Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.



do
{
    console.clear()
    var num1 = pc("Digite um numero par! ")
} while ((num1%2)!= 0);
console.log("É par!")