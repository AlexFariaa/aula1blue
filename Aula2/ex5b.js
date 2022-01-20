console.clear();
var pc = require('prompt-sync')();

var l1 = +pc("Insira um valor para l1 o triangulo: ");
console.log();
var l2 = +pc("Insira outro valor para l2 o triangulo: ");
console.log();
var l3 = +pc("Insira o ultimo lado l3 do triangulo: ");
console.log();

if (l1 > (l2 & l3) & l1 > (l3 & l2)){
    console.log(l1,l2,l3);
    console.log("l1 é maior");
    let a = l1
    console.log(a);
} else if (l2 > (l1 & l3) & l2 > (l3 & l1)){
    console.log(l2, l1, l3);
    console.log("l2 é maior");
    let a = l2
    console.log(a);
}

