// 16. Uma loja de decoração precisa aumentar o seu faturamento para o próximo mês em
// 20%. Esta loja deseja atingir este objetivo aumentando a venda de três produtos. O
// produto 1 custa R$ 150 o produto 2 R$ 220,00 e o produto 3 R$ 97.00. Faça um algoritmo
// que receba o valor de faturamento do último mês e apresente:
// a) O faturamento do próximo mês para bater a meta de 20%. b) A quantidade de peças apenas do produto 1 necessárias para obter a meta desejada.

const faturamento = parseFloat(prompt("Digite o valor do faturamento do mês anterior: "));

const meta = faturamento * 1.2;
const produto1 = 150;
const produto2 = 220;
const produto3 = 97;

const quantidadeProduto1 = (meta - faturamento) / produto1;

console.log(`A meta do proximo mes e: ${meta.toFixed(2)}`);
console.log(`Um aumento de: ${(meta - faturamento).toFixed(2)}`);
console.log(`A quantidade de peças a serem vendidas para atingir a meta:`);
console.log(`Produto 1: ${quantidadeProduto1.toFixed(2)} peças`);
console.log(`Produto 2: ${((meta - faturamento) / produto2).toFixed(2)} peças`);
console.log(`Produto 3: ${((meta - faturamento) / produto3).toFixed(2)} peças`);
