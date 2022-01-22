console.clear()
var pc = require('prompt-sync')();

//Faça um programa que leia e valide as seguintes informações:
//Nome: maior que 3 caracteres;
//Idade: entre 0 e 150;
//Salário: maior que zero;
//Estado Civil: 's', 'c', 'v', 'd';

 

console.clear()
let nome = pc("Qual o seu nome? ");
let idade = +pc("Qual sua idade? ");
let sal = +pc("Qual seu salario? R$");
console.log("Qual seu estado civil? ");
console.log(`
Escolhe 1 das opções: 
[s] - Solteiro
[c] - Casado
[v] - Viuvo
[d] - Divorciado`);
let ec = pc("Resposta: ").toLowerCase
let qtd = nome.length
console.clear()
    while(qtd <= 3)// (ec != 's' || ec != 'c' || ec != 'v' || ec != 'd'))
    {
        console.log("USUARIO INVALIDO!")
        console.log("TENTE NOVAMENTE!")
        console.log("(seu nome deve conter mais de 3 caracteres)*")
        console.log()
        nome = pc("Qual o seu nome? ");
        console.clear()
        qtd = nome.length
    }
    console.clear()
    while (idade < 0 || idade > 150)
    {
        console.log("USUARIO INVALIDO!")
        console.log("TENTE NOVAMENTE!")
        console.log("(sua idade deve ser entre 0 e 150)*")
        console.log()
        idade = +pc("Qual o seu nome? ");
        console.clear()
    }
    console.clear()
    while (sal < 0)
    {
        console.log("USUARIO INVALIDO!")
        console.log("TENTE NOVAMENTE!")
        console.log("(seu salario deve ser maior que R$0,00)*")
        console.log()
        sal = +pc("Qual o seu salario? ");
        console.clear()
    }
    console.clear()
    while (ec != 's' && ec != 'c' && ec != 'v' && ec != 'd')
    {
        console.log("USUARIO INVALIDO!")
        console.log("TENTE NOVAMENTE!")
        console.log("(Selecione uma opção referente ao mostrado)*")
        console.log()
        console.log(`
Escolhe 1 das opções: 
[s] - Solteiro
[c] - Casado
[v] - Viuvo
[d] - Divorciado`);
ec = pc("Resposta: ").toLowerCase()
        console.log()
        console.clear()
    }

console.log("Cadastro valido!")





