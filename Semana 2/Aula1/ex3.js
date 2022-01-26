console.clear();
const pc = require('prompt-sync')();
console.log()

var nalunos
var laluno = []
var lnota = []
cont = 0
contnota = 0

nalunos = +pc("Quantos alunos você quer cadastrar a nota? ");

while (cont != nalunos)
{
    console.log()
    cont++
    var aluno = pc(`Qual o nome do ${cont}º aluno? `);
    var nota = +pc(`Qual a nota do ${cont}º aluno? `);
    laluno.push(aluno);
    lnota.push(nota);
    contnota = contnota + nota
    console.clear
}

console.log(laluno)
console.log(lnota)
console.log(`A média total dos alunos foi de nota: ${contnota/(laluno.length)}`)