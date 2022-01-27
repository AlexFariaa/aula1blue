console.clear()
var pc = require('prompt-sync')();

let qtd_nota = +pc("Quantas notas quer cadastrar? ");
var nota = []
var nota_aluno
var ap = 0
var rep = 0
var rec = 0
cont = 0

while (cont < qtd_nota)
{
    cont++
    nota_aluno = +pc(`Declare a ${cont}ª nota: `);
    nota.push(nota_aluno)
    if (nota_aluno >= 7)
    {
        ap++
        console.log(`${cont}º Aluno aprovado`);
    }
    if (nota_aluno >= 5 && nota_aluno < 7)
    {
        rec++
        console.log(`${cont}º Aluno de recuperação`);
    } if (nota_aluno < 5) {
        rep++
        console.log(`${cont}º Aluno reprovado`)
    }
}
console.clear()
console.log()
console.log(`A quantidade de alunos aprovados foi de: ${ap} Alunos`);
console.log()
console.log(`A quantidade de alunos em recuperação foi de: ${rec} Alunos`);
console.log()
console.log(`A quantidade de alunos reprovados foi de: ${rep} Alunos`);