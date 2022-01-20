console.clear();
var pc = require('prompt-sync')();

let n1 = +pc("Digite um numero: ");
let n2 = +pc("Digite outro numero: ");

if ((n1%n2)==0 || (n2%n1)==0){
    console.log("são multiplos");
} else {
    console.log("Não são multiplos");
}