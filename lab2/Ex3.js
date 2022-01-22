console.clear();
var pc = require('prompt-sync')();



do {
    console.log("(valor minimo para saque R$10,00 e max R$600,00)");
    var saque = +pc("Quanto deseja sacar? ");
} while ((saque < 10 || saque > 600));

var rest_saque = saque

if (saque >= 100)
{
    var n100 = parseInt(saque / 100);
    rest_saque = 0 + saque % 100
    console.log(`Você tem ${n100} notas de R$100,00`)
}
if (rest_saque <= 99 & rest_saque >= 50)
{
    var n50 = parseInt(rest_saque / 50)
    rest_saque = rest_saque - 50
    console.log(`Você tem ${n50} notas de R$50,00`)
}

if(rest_saque <= 49 & rest_saque >=10)
{
    var n10 = parseInt(rest_saque/10)
    rest_saque = rest_saque - 10*n10
    console.log(`Você tem ${n10} notas de R$10,00`)
}
if(rest_saque <= 9 & rest_saque >= 5)
{
    var n5 = parseInt(rest_saque/5)
    rest_saque = rest_saque - 5
    console.log(`Você tem ${n5} notas de R$5,00`)
}
if(rest_saque <= 9 & rest_saque >= 1)
{
    var n1 = parseInt(rest_saque/1)
    rest_saque = rest_saque - 1*n1
    console.log(`Você tem ${n1} notas de R$1,00`)
} 
