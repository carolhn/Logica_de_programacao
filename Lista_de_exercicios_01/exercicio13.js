// 13. A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: lata de 350
// ml, garrafa de 600 ml e garrafa de 2 litros. Se um comerciante compra uma determinada
// quantidade de cada formato, faça um algoritmo para calcular quantos litros de refrigerante
// ele comprou.

const lata = parseInt(prompt("Informe a quantidade de latas de 350ml: "));
const garrafa600 = parseInt(prompt("Informe a quantidade de garrafas de 600ml: "));
const garrafa2 = parseInt(prompt("Informe a quantidade de garrafas de 2lts: "));

const total350ml = (lata * 350) / 1000;
const total600ml = (garrafa600 * 600) / 1000;
const total2l = (garrafa2 * 2000) / 1000;

console.log(`A quantidade total de litros e: ${(total350ml + total600ml + total2l)}`);
