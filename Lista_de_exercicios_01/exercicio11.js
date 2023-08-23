// 11. Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de
// maracujá. Faça um algoritmo para calcular quantos litros de água e de suco são
// necessários para se fazer uma certa quantidade de litros de refresco informados pelo
// usuário.

const suco = parseInt(prompt("Informe a QTDE de lts de suco necessaria: "));
const Agua = (litrosRefresco * 8) / 10;
const maracuja = (litrosRefresco * 2) / 10;

console.log(`Sera necessario para fazer  ${suco} lts de suco de maracujá:`);
console.log(` ${(Agua).toFixed(2)} lts de agua`);
console.log(` ${(maracuja).toFixed(2)} lts de suco de maracujá`);
