console.clear();
var pc = require('prompt-sync')();

console.log("Você deseja calcular manualmente ou automaticamente os salarios? ");
console.log();
console.log("[1] Manualmente");
console.log("[2] Automaticamente");
console.log();
var r1 = +pc("Resposta: ");

if (r1 === 1){
var sal = parseFloat(+pc("Digite o salario para o reajuste: R$")).toFixed(2);
var aj = parseFloat(+pc("Digite o ajuste: ")).toFixed(1);


var v_aj = parseFloat(sal*(aj/100)).toFixed(2);

var sal_aj = (sal + v_aj);

console.log(`O valor ajustado fica: R$${sal_aj}`);

}










/*if (sal <= 280.00){
    var v_aj = sal*(aj/100)
    var sal_aj = v_aj+sal
} else if (sal => 280.00 & sal <= 700.00){
    var v_aj = sal*(aj/100)
    var sal_aj = v_aj+sal
    }
    */
