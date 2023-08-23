// 8. Faça um algoritmo para ler o salário de um funcionário e aumentá-Io em 15%. Após o
// aumento, desconte 11% de INSS e 8% de FGTS. Imprima o salário inicial, o salário com o
// aumento, o salário final, o desconto do INSS, o desconto do FGTS e o Total de Descontos
// (INSS+FGTS).

const salario = parseFloat(prompt("Informe o salário: "));
const aumento = salario + (salario * 0.15);
const inss = aumento - (aumento * 0.11);
const fgts = aumento - (aumento * 0.08);
const totalImpostos = (aumento - inss) + (aumento - fgts);
const salarioLiquido = aumento - totalImpostos;


console.log(`Salário inicial: R$ ${salario.toFixed(2)}`);
console.log(`Salário Reajustado: R$ ${aumento.toFixed(2)}`);
console.log(`Desconto 11% do INSS: R$ ${(aumento - inss).toFixed(2)}`);
console.log(`Desconto 8% do FGTS: R$ ${(aumento - fgts).toFixed(2)}`);
console.log(`Total de descontos INSS + FGTS: R$ ${(totalImpostos).toFixed(2)}`);
console.log(`Salário final: R$ ${(salarioLiquido).toFixed(2)}`);
