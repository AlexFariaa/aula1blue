console.clear();
const pc = require('prompt-sync')();
console.log();

var qtd
var x
cont = 0

var num_dado = []
console.log("Quantos lados tem seu dado? ")
qtd = +pc("(maximo de 6 lados): ")
console.log()
x = +pc("Quantas vezes quer jogar o dado? ")
console.log()

let n1 = 0
let n2 = 0
let n3 = 0
let n4 = 0
let n5 = 0
let n6 = 0

while (cont != x)
{
    cont++
    var dado = Math.floor(Math.random() * qtd + 1)
    num_dado.push(dado)
    if (dado == 1)
    {
        n1 = n1 + 1
    } else if (dado == 2)
    {
        n2 = n2 + 1
    } else if (dado == 3)
    {
        n3 = n3 + 1
    } else if (dado == 4)
    {
        n4 = n4 + 1
    } else if (dado == 5)
    {
        n5 = n5 + 1
    } else if (dado == 6)
    {
        n6 = n6 + 1
    }
}

console.log(`Você jogou um dado de ${qtd} lados, ${x} vezes`);
console.log()
console.log(`Seu dado apareceu o numero 1, ${n1} vezes`)
console.log()
console.log(`Seu dado apareceu o numero 2, ${n2} vezes`)
console.log()
console.log(`Seu dado apareceu o numero 3, ${n3} vezes`)
console.log()
console.log(`Seu dado apareceu o numero 4, ${n4} vezes`)
console.log()
console.log(`Seu dado apareceu o numero 5, ${n5} vezes`)
console.log()
console.log(`Seu dado apareceu o numero 6, ${n6} vezes`)
console.log()








