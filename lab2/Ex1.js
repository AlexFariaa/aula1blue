console.clear();
var pc = require('prompt-sync')();

console.log("Você deseja calcular manualmente ou automaticamente os salarios? ");
console.log();
console.log("[1] Manualmente");
console.log("[2] Automaticamente");
console.log();
var r1 = +pc("Resposta: ");

if (r1 === 1){
var sal = +pc("Digite o salario para o reajuste: R$")
console.log();
var aj = +pc("Digite o ajuste: ","%")
console.log();

var v_aj = (sal*(aj/100));

var sal_aj = (sal + v_aj);

console.log(`O salario antes do ajuste é: R$${sal}`);
console.log(`O percentual do aumentou foi: ${aj}%`);
parseFloat(console.log(`Acrescentará R$${v_aj}`)).toFixed(2);
parseFloat(console.log(`O seu novo salário é: R$${sal_aj}`)).toFixed(2);
}  else {

    var sal = +pc("Digite o salario para o reajuste: R$")
    console.log();

    if (sal <= 280.00){
    var v_aj = sal*0.2
    var sal_aj = v_aj+sal
    console.log(`O salario antes do ajuste é: R$${sal}`);
    console.log(`O percentual do aumentou foi: 20%`);
    parseFloat(console.log(`Acrescentará R$${v_aj}`)).toFixed(2);
    parseFloat(console.log(`O seu novo salário é: R$${sal_aj}`)).toFixed(2);    
} else if (sal => 280.01 & sal <= 700.00){
    var v_aj = sal*0.15
    var sal_aj = v_aj+sal
    console.log(`O salario antes do ajuste é: R$${sal}`);
    console.log(`O percentual do aumentou foi: 15%`);
    parseFloat(console.log(`Acrescentará R$${v_aj}`)).toFixed(2);
    parseFloat(console.log(`O seu novo salário é: R$${sal_aj}`)).toFixed(2);
}
    else if (sal => 700.00 & sal <= 1500.00){
        var v_aj = sal*0.1
        var sal_aj = v_aj+sal
        console.log(`O salario antes do ajuste é: R$${sal}`);
        console.log(`O percentual do aumentou foi: 10%`);
        parseFloat(console.log(`Acrescentará R$${v_aj}`)).toFixed(2); 
        parseFloat(console.log(`O seu novo salário é: R$${sal_aj}`)).toFixed(2);
    }
    else {
        var v_aj = sal*0.05
        var sal_aj = v_aj+sal
        console.log(`O salario antes do ajuste é: R$${sal}`);
        console.log(`O percentual do aumentou foi: 5%`);
        parseFloat(console.log(`Acrescentará R$${v_aj}`)).toFixed(2);
        parseFloat(console.log(`O seu novo salário é: R$${sal_aj}`)).toFixed(2);
    }
}
