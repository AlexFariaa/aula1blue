console.clear()
var pc = require('prompt-sync')();

//Jogo da adivinhação - Escreva um programa que faça o computador “pensar” 
//em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir 
//qual foi o número escolhido pelo computador. O programa deve ser repetir 
//até o usuário acertar o número, e a cada palpite deve dizer se o número é 
//maior ou menor que o palpite. No final dele deve escrever na tela que o 
//usuário encontrou o número, e mostrar a quantidade de palpites que foi 
//necessária.

var pense = Math.floor(Math.random() * 11)
var cont = 0

while (resp != pense)
{
cont = cont +1
console.log()
var resp = +pc("Tente adivinhar o numero da maquina: ");
    if (resp > pense)
    {
    console.clear
    console.log("errou!!!");
    console.log("Um pouco menos...");
    }
    if (resp < pense)
    {
        console.clear
        console.log("errou!!!");
        console.log("Um pouco mais...")
    }
}

console.log("ACERTOU!!!")
console.log(`Contador de palpites: ${cont}`)