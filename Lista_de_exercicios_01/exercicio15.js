// 15. A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, R$15,00 por hora
// extra e R$ 90 reais por cada dependente menor que 6 anos. Faça um algoritmo que
// solicite a quantidade de horas normais e extras trabalhadas no mês além da quantidade
// de dependentes menores que 6 anos. Considere que o salário líquido é igual ao salário de
// horas normais descontando-se 11% de impostos. O salário final é o salário liquido mais o
// valor recebido por cada dependente mais as horas extras.

const horasNormais = parseInt(prompt("Digite a quantidade total de horas normais: "));
const horasExtras = parseInt(prompt("Digite a quantidade total de horas extras: "));
const dependentes = parseInt(prompt("Digite a quantidade total de dependentes menores de 6 anos: "));

const salarioNormal = horasNormais * 10;
const horaExtra = horasExtras * 15;
const salarioDependentes = dependentes * 90;
const salarioLiquido = salarioNormal - (salarioNormal * 0.11);
const salarioFinal = salarioLiquido + horaExtra + salarioDependentes;

console.log(`Horas normais R$ ${salarioNormal}`);
console.log(`Adicional de horas extras R$ ${horaExtra}`);
console.log(`Adicional de dependentes R$ ${salarioDependentes}`);
console.log(`Salário líquido (Hrs normais - Descontos) R$ ${salarioLiquido}`);
console.log(`Salário final R$ ${salarioFinal}`);