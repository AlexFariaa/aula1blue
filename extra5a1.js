console.clear();
const pc = require('prompt-sync')();

let op
let op1
let op2
let op3

op = +pc("Digite 1 para abrir o menu: ");

if (op != 1){
    console.log("Saindo...")
} else {
    console.log("Menu aberto");
    console.log();
    op1 = pc("[a] para cadastrar.");
        if (op1 == "a"){
        let n 
        let idade
        let senha
        n = pc("Digite seu nome completo: ");
        idade = +pc("Digite sua idade: ");
        senha = +pc("Digite sua senha (só numeros): ");
        console.log();
        console.log(`Parabens! Seu cadastro foi finalizado com sucesso.`);
        console.log();
        console.log(`Olá ${n}. Seja bem vindo!`);
        console.log();
    op2 = pc("[b] para entrar.");
    op3 = pc("[c] para sair.");
    } 
    
}