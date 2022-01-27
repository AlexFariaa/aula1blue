console.clear()
var pc = require('prompt-sync')();
console.log();
var senha = ''
let ver = []
let login = pc("Digite seu login de cadastro: ");
n = pc("Digite sua senha para cadastro: ")

ver.push(n) // ver é o array de teste para os parametros

var result = /[0-9]/.test(ver)
var result1 = /\W/.test(ver)
console.log(n.length)

console.log(result);
console.log(result1)

if (result == false) // verifica se há numeros 
{
    do
    {
        n = pc("A senha deve ter pelo menos 1 numero: ");
        ver.push(n)
        var result = /[0-9]/.test(ver)
    } while (result == false)
    senha = n 
}
if (n.length < 8) // verifica se tem + do que 8 caracteres
{
    do
    {
        n = pc("A senha deve ter no minimo 8 caracteres: ");
        ver.push(n)
    } while (n.lenght < 8)
    senha = n
}
if (result1 == false) // verifica se tem caracteres especiais
{
    do
    {
        n = pc("A senha deve ter pelo menos 1 caracter especial: ");
        ver.push(n)
        var result1 = /[0-9]/.test(senha)
    } while (result1 == false)
}


console.log("login feito");




