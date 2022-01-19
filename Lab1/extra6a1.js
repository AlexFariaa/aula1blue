console.clear();
var pc = require('prompt-sync')();

let vd
let atk

vd = +pc("Digite a quantidade de vida de um monstro (de 10 a 50): ");
console.log(`A vida do monstro é de: ${vd} pontos`);
console.log();
atk = +pc("Digite agora o dano de ataque por turno do seu guerreiro: ");
console.log(`Seu dano de ataque é de: ${atk}/turno`);
console.log();
console.log("QUE OS JOGOS COMECEM");
console.log();
console.log(`Você irá derrotar o monstro em ${vd/atk} turnos`);
console.log();



