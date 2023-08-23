// 1. Uma imobiliária vende apenas terrenos retangulares. Faça um algoritmo para imprimir a
// área do terreno e o valor de venda do mesmo. Para isto será necessário o usuário
// informar as dimensões em metros (frente e lateral) do terreno além do valor cobrado pelo
// metro quadrado. Resultado esperado:


const base = parseFloat(prompt("Quantos metros o terreno possui de frente: "));
const altura = parseFloat(prompt("Quantos metros o terreno possui de lateral: "));
const valorMetro = parseFloat(prompt("Informe o valor do metro quadrado: "));


const calculaArea = (base, altura) => {
    return base * altura;
}

const calculaValor = (area, valorMetro) => {
    return area * valorMetro;
}

console.log(`A área total do terreno é: ${calculaArea(base, altura)} mts, de frente é: ${base} mts, de lateral é: ${altura} mts.
O valor deste terreno é: R$ ${calculaValor(calculaArea(base, altura), valorMetro)}`);
