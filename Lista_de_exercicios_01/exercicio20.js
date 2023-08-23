// 20. Ler um número inteiro com até quatro dígitos e imprimir a saída da seguinte forma:
// MILHARES = x
// CENTENA = x
// DEZENA = x
// UNIDADE = x

const numero = parseInt(prompt("Digite um numero de 4 digitos: "));

const milhar = parseInt(numero / 1000);
const centena = parseInt((numero % 1000) / 100);
const dezena = parseInt((numero % 100) / 10);
const unidade = parseInt(numero % 10);

console.log(`Milhares: ${milhar}`);
console.log(`Centena: ${centena}`);
console.log(`Dezena: ${dezena}`);
console.log(`Unidade: ${unidade}`);
