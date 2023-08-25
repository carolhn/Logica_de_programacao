// 8. Faça um algoritmo para ler o salário de um funcionário e aumentá-Io em 5%. Após o
// aumento, desconte 11% de INSS e 8% de FGTS e o % do IR conforme a tabela abaixo. Imprima o
// salário inicial, o salário com o aumento, o salário final, o desconto do INSS, o desconto do FGTS,
// o desconto do IR e o Total de Descontos (INSS+FGTS+IR). O desconto do Imposto de Renda é
// variável. Quando o salário do funcionário muda de uma faixa de desconto de IR para outra, ele
// pode mesmo com o aumento de 5% receber menos do que quando comparado antes do aumento.
// O seu algoritmo deve calcular e descobrir se o novo salário (5%) fará com que o usuário receba
// um salário final menor do que antes de aplicar os 5%

const salarioInicial = parseFloat(prompt("Informe o salário: "));

const calculaDescontoIR = (salario) => {
    let descontoIR = 0;

    if (salario > 4664.68) {
        descontoIR = salario * 0.275;
    } else if (salario > 3751.06) {
        descontoIR = salario * 0.225;
    } else if (salario > 2826.65) {
        descontoIR = salario * 0.15;
    } else if (salario > 1903.98) {
        descontoIR = salario * 0.075;
    }

    return descontoIR;
};

const salarioReajustado = salarioInicial * 1.05;
const descontoINSS = salarioReajustado * 0.11;
const descontoFGTS = salarioReajustado * 0.08;
const descontoIR = calculaDescontoIR(salarioReajustado);
const totalDescontos = descontoINSS + descontoFGTS + descontoIR;
const salarioFinal = salarioReajustado - totalDescontos;

console.log(`Salário Inicial: ${salarioInicial.toFixed(2)}`);
console.log(`Salário Reajustado: ${salarioReajustado.toFixed(2)}`);
console.log(`Desconto 11% INSS: ${descontoINSS.toFixed(2)}`);
console.log(`Desconto 8% FGTS: ${descontoFGTS.toFixed(2)}`);
console.log(`Desconto IR: ${descontoIR.toFixed(2)}`);
console.log(`Total Descontos INSS+FGTS+IR: ${totalDescontos.toFixed(2)}`);
console.log(`Salário Final: ${salarioFinal.toFixed(2)}`);

if (salarioFinal < salarioInicial) {
    console.log("O novo salário final é menor do que o salário recebido antes do aumento!");
}
