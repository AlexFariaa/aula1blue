console.clear()
var pc = require('prompt-sync')();

//Faça um programa que leia um nome de usuário
//e a sua senha e não aceite a senha igual ao nome do usuário,
//mostrando uma mensagem de erro e voltando a pedir as informações.

var login = pc("Digite seu login: ");
var senha = pc("Digite sua senha: ");

while (login == senha)
{
    console.log("Login invalido");
    console.log();
    login = pc("Digite seu login: ");
    senha = pc("Digite sua senha: ");
    
}
