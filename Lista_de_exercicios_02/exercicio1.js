// 1. Uma imobiliária vende apenas terrenos retangulares. Faça um algoritmo para
// imprimir a área do terreno e o valor de venda do mesmo. Para isto será necessário o usuário
// informar as dimensões em metros (frente e lateral) do terreno além do valor cobrado pelo metro
// quadrado. Caso a diferença de metragem entre a frente e a lateral seja menor que 10% da
// metragem da frente, o cliente terá um acréscimo de 22% no valor final do terreno.
// Caso a metragem da frente for menor que 40% da lateral, o cliente terá um desconto de 12% no
// valor final do terreno. Caso a metragem da frente for maior que 70% da lateral, o cliente terá um
// desconto de 15%. Caso as medidas não encaixem em nenhuma das regras o valor final do
// terreno não sofrerá alterações.


const frente = parseFloat(prompt("Digite a frente do terreno: "));
const lateral = parseFloat(prompt("Digite a lateral do terreno: "));
const valorMetro = parseFloat(prompt("Digite o valor do metro quadrado: "));

function calcularDesconto(frente, lateral, valorMetro) {
    const area = frente * lateral;
    const diferenca = Math.fabs(frente - lateral);
    
    if (diferenca < 0.1 * frente) {
        return area * valorMetro * 1.22;
    } else if (frente < 0.4 * lateral) {
        return area * valorMetro * 0.88;
    } else if (frente > 0.7 * lateral) {
        return area * valorMetro * 0.85;
    } else {
        return area * valorMetro;
    }
}

const valorTerreno = calcularDesconto(frente, lateral, valorMetro);
const areaTerreno = frente * lateral;

if (valorTerreno > calcularDesconto(frente, lateral, valorMetro)) {
    console.log(`Area total do terreno de ${frente.toFixed(2)} mts de frente com ${lateral.toFixed(2)} mts de lateral e: ${areaTerreno.toFixed(2)} mts`);
    console.log("O terreno recebeu um decrescimo de 15% e custara:");
    console.log(`R$ ${(valorTerreno).toFixed(2)}`);
} else if (valorTerreno < calcularDesconto(frente, lateral, valorMetro)) {
    console.log(`Area total do terreno de ${frente.toFixed(2)} mts de frente com ${lateral.toFixed(2)} mts de lateral e: ${areaTerreno.toFixed(2)} mts`);
    console.log("O terreno recebeu um acrescimo de 22% e custara:");
    console.log(`R$ ${(valorTerreno).toFixed(2)}`);
} else {
    console.log(`Area total do terreno de ${frente.toFixed(2)} mts de frente com ${lateral.toFixed(2)} mts de lateral e: ${areaTerreno.toFixed(2)} mts`);
    console.log("O terreno não recebeu nenhuma alteração e custará:");
    console.log(`R$ ${(valorTerreno).toFixed(2)}`);
}
