// 14. A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas
// fatias de queijo, uma fatia de presunto e uma rodela de hambúrguer. Sabendo que cada
// fatia de queijo ou presunto pesa 50 gramas, e que a rodela de hambúrguer pesa 120
// gramas, faça um algoritmo em que o dono forneça a quantidade de sanduíches a fazer, e
// a máquina informe as quantidades (em quilos) de queijo, presunto e carne necessários
// para compra.

const quantidade = parseInt(prompt("Digite a quantidade de sanduíches: "));
const queijo = (quantidade * 2) * 50 / 1000;
const presunto = (quantidade * 1) * 50 / 1000;
const hamburguer = (quantidade * 1) * 120 / 1000;

console.log(`Para produzir ${quantidade} sanduíches serão necessários:`);
console.log(` ${queijo.toFixed(2)} kgs de mussarela`);
console.log(` ${presunto.toFixed(2)} kgs de presunto`);
console.log(` ${hamburguer.toFixed(2)} kgs de hambúrguer`);
