console.clear();
var pc = require('prompt-sync')();

var l1 = +pc("Insira um valor para l1 o triangulo: ");
console.log();
var l2 = +pc("Insira outro valor para l2 o triangulo: ");
console.log();
var l3 = +pc("Insira o ultimo lado l3 do triangulo: ");
console.log();

 var a
 var b
 var c

if (l1 > (l2 & l3) & l2 > l3){
    l1 = a
    l2 = b
    l3 = c
    console.log("l1 é maior");
} else if (l2 > (l1 & l3) & l1 > l3){
    l2 = a
    l1 = b
    l3 = c 
    console.log("l2 é maior");
} else if(l3 > (l1 & l2) & l2 > l1){
    l3 = a
    l2 = b
    l1 = c
    console.log("l3 é maior");
} else if (l1 > (l2 & l3)& l3 > l2){
    l1 = a
    l3 = b
    l2 = c
    console.log(a, b, c);
} else if (l2 > (l1 & l3) & l3 > l1){
    l2 = a
    l3 = b
    l1 = c
    console.log(a, b, c);
}
