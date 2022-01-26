console.clear()
var pc = require('prompt-sync')();

let n = +pc("Digite um numero para eu separar pares e impares: ");

cont = 0

let ni = []
let np = []

while (cont != n)
{
    cont++
    if (cont%2 == 0)
    {
        ni.push(cont)
    } else
    {
        np.push(cont)
    }
}
console.log(n)
console.log(ni);
console.log(np);