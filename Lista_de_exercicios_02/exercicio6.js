// 06: Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar
// todos os cavalos comprados para um haras. O usuário devera informar a quantidade de cavalos
// adquiridos e o valor de cada ferradura. Aplique um desconto no valor total conforme a tabela de
// descontos:

const quantidadeCavalos = parseInt(prompt("Informe a quantidade de cavalos: "));
const valorFerradura = parseFloat(prompt("Informe o valor de cada ferradura R$: "));

let totalFerraduras = quantidadeCavalos * 4;
let desconto = 0;

if (valorFerradura >= 15000.01 && valorFerradura <= 20000.00) {
    desconto = 0.10;
} else if (valorFerradura >= 20000.01 && valorFerradura <= 25000.00) {
    desconto = 0.12;
} else if (valorFerradura >= 25000.01 && valorFerradura <= 30000.00) {
    desconto = 0.15;
} else if (valorFerradura > 30000.00) {
    desconto = 0.20;
}

const valorTotalSemDesconto = totalFerraduras * valorFerradura;
const valorComDesconto = valorTotalSemDesconto - (valorTotalSemDesconto * desconto);

console.log(`A quantidade de ferraduras necessárias: ${totalFerraduras}`);
console.log(`Valor total para a compra das ferraduras: R$ ${valorComDesconto.toFixed(2)}`);
