// 19. Entrar com o dia e o mês de uma data e informar quantos dias se passaram desde o
// início do ano. Esqueça a questão dos anos bissextos e considere sempre que um mês
// possui 30 dias.

const dia = parseInt(prompt("Digite o dia: "));
const mes = parseInt(prompt("Digite o mes:"));

const calculaDia = (mes * 30) + dia;

console.log(`A quantidade de dias que se passaram foi ${calculaDia} dias`);
