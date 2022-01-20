console.clear();
var pc = require('prompt-sync')();



let n1 = +pc("Digite a nota do 1º bimestre: ");
let n2 = +pc("Digite a nota do 2º bimestre: ");
let n3 = +pc("Digite a nota do 3º bimestre: ");
let n4 = +pc("Digite a nota do 4º bimestre: ");
console.log();

let tot = parseFloat((n1+n2+n3+n4)/4).toFixed(2)

if (tot < 5){
    console.log(`Aluno reprovado com média: ${tot}`);
}   else if (tot > 5 || tot < 7){
    console.log(`Aluno de recuperação com média: ${tot}`);
}   else{
    console.log(`Aluno aprovado com média: ${tot}`);
}