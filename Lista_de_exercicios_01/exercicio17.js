// 17. Uma padaria vende uma certa quantidade de pães franceses e uma quantidade de
// broas a cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,60. Ao final do dia, o
// dono quer saber quanto arrecadou com a venda dos pães e broas (juntos), e quanto deve
// guardar numa conta de poupança (10% do total arrecadado) para realizar uma reforma. Você foi contratado para fazer os cálculos para o dono. Com base nestes fatos, faça um
// algoritmo para ler as quantidades de pães e de broas, o valor da reforma e depois calcule
// o valor arrecado, o valor a ser depositado na poupança e quantos dias serão necessários, caso mantenha o mesmo faturamento, para custear a reforma. Requisito adicional: A quantidade de dias deve ser retornado como um valor inteiro. Exemplo: 3.78 dias deverá retornar 4 dias

// 9.2 dias deverá retornar 10 dias
// 10.89 dias deverá retornar 11 dias

const pao = parseInt(prompt("Digite a quantidade de pães vendidos: "));
const broa = parseInt(prompt("Digite a quantidade de broas vendidas: "));
const reforma = parseFloat(prompt("Digite o valor da reforma: "));

const valorPao = pao * 0.12;
const valorBroa = broa * 1.6;
const valorTotal = valorPao + valorBroa;

const poupanca = valorTotal * 0.1;
const dias = Math.ceil(reforma / poupanca);

console.log(`O faturamento com a venda de boas: R$ ${valorBroa.toFixed(2)}`);
console.log(`O faturamento com a venda de pães: R$ ${valorPao.toFixed(2)}`);
console.log(`O faturamento diario (paes + boas): R$ ${valorTotal.toFixed(2)}`);
console.log(`O valor do deposito na poupança: R$ ${poupanca.toFixed(2)}`);
console.log(`Para pagar a reforma serao necessarios:${dias} dias`);