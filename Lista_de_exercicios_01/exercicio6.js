// 6. Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar
// todos os cavalos comprados para um haras. O usuário devera informar a quantidade de
// cavalos adquiridos.

const quantidadeCavalos = parseInt(prompt("Informe a quantidade de cavalos: "));
const valorFerraduras = parseFloat(prompt("Informe o valor de cada ferradura: "));

const calculaFerraduras = (quantidadeCavalos) => {
    return quantidadeCavalos * 4;
}

const precoTotal = (quantidadeCavalos * 4) * valorFerraduras;

console.log(`A quantidade de ferraduras necessárias é: ${calculaFerraduras(quantidadeCavalos)}`);
console.log(`O valor total para a compra das ferraduras é: ${precoTotal.toFixed(2)}`);
