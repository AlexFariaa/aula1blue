console.clear();
var pc = require('prompt-sync')();

var pense = Math.floor(Math.random() * 10+1);
var resp = pc("Qual seu palpite? ");

if (resp == pense)
{
    console.log("Voce acertou");
}
else
{
    console.log("Voce errou")
}
