console.clear();
var pc = require('prompt-sync')();



let n1 = +pc("Digite um numero: ");
console.log()
let n2 = +pc("Digite outro numero: ");
console.log()

if (n1 > n2){
    console.log(`${n1} É o numero maior`);
} else if (n2 > n1){
    console.log(`${n2} É o numero maior`);
} else {
    console.log("Os numeros são iguais");
}
