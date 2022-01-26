console.clear();
var pc = require('prompt-sync')();

var l1 = +pc("Insira um valor para l1 o triangulo: ");
console.log();
var l2 = +pc("Insira outro valor para l2 o triangulo: ");
console.log();
var l3 = +pc("Insira o ultimo lado l3 do triangulo: ");
console.log();

if (l1 > l2 & l1 > l3){
    var a = l1
    if (l2 > l3){
        var b = l2
        var c = l3
        console.log("A ordem decrescente dos lados ficou: ",a, b, c);
    }
    else {
        var b = l3
        var c = l2
        console.log("A ordem decrescente dos lados ficou: ",a, b, c);
    }
}
if (l2 > l1 & l2 > l3){
    var a = l2
    if (l1 > l3){
        var b = l1
        var c = l3
        console.log("A ordem decrescente dos lados ficou: ", a, b, c);
    }
    else {
        var b = l3
        var c = l1
        console.log("A ordem decrescente dos lados ficou: ",a, b, c);
    }
}
if (l3 > l1 & l3 > l2){
    var a = l3
    if (l1 > l2){
        var b = l1
        var c = l2
        console.log("A ordem decrescente dos lados ficou: ", a, b, c);
    }
    else {
        var b = l2
        var c = l1
        console.log("A ordem decrescente dos lados ficou: ",a, b, c);
    }
}

if (a > (b+c))
{
    console.log("Não forma um triangulo!");
} else if ((a*a)==(b*b+c*c)){
    console.log("Triangulo retangulo!");
} else if ((a*a) > (b*b+c*c)){
    console.log("Triangulo obtusangulo!");
} else if ((a*a) < (b*b+c*c)){
    console.log("Triangulo acutangulo!");
} else if ((a == b) & (a == c) & (b == c)){
    console.log("Triangulo equilatero");
} else if ((a == b) || (a == c) || (b == c)){
    console.log("Triangulo isosceles")
}