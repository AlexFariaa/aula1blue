console.clear();
var pc = require('prompt-sync')();

let n 

n = +pc("Digite um numero: ");

if ((n%2 == 0)){
    console.log("é par")
} else {
    console.log("é impar")
}