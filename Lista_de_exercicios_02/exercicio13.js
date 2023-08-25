// 13. A granja Frangotech possui um controle automatizado de cada frango da sua
// produção. No pé direito do frango há um anel com um chip de identificação; no pé esquerdo são
// dois anéis para indicar o tipo de alimento que ele deve consumir. Faça um algoritmo para calcular
// o gasto total da granja para marcar todos os seus frangos que deverá ser informado pelo usuário
// além do valor do chip de identificação e do chip de alimentação. Caso a diferença de valor dos
// chips for menor ou igual a 20% do chip de maior valor, deve ser adicionado mais 20% na
// quantidade total de chips de menor valor.


const qtdeFrangos = parseInt(prompt("Digite a QTDE de frangos: "));
const valorChipAlimentacao = parseFloat(prompt("Digite o valor do chip de alimentação R$: "));
const valorChipIdentificacao = parseFloat(prompt("Digite o valor do chip de identificação R$: "));

const calcularGastoTotal = (qtdeFrangos, valorChipAlimentacao, valorChipIdentificacao) => {
    const diferencaChips = Math.abs(valorChipAlimentacao - valorChipIdentificacao);
    const percentualMaiorChip = (diferencaChips / Math.max(valorChipAlimentacao, valorChipIdentificacao)) * 100;

    let qtdeChipMenor = (qtdeFrangos * valorChipAlimentacao) / valorChipIdentificacao;

    if (percentualMaiorChip <= 20) {
        qtdeChipMenor *= 1.2;
        console.log(`A quantidade do chip de alimentação sofreu aumento de 20%`);
        console.log(`de (${qtdeFrangos} unidades) para (${qtdeChipMenor.toFixed(0)} unidades)`);
    }

    const totalChipAlimentacao = qtdeFrangos * valorChipAlimentacao;
    const totalChipIdentificacao = qtdeFrangos * valorChipIdentificacao;
    const adicional20 = (qtdeChipMenor - (qtdeFrangos * valorChipAlimentacao)) * valorChipAlimentacao * 0.2; // Correção nesta linha
    const valorTotal = totalChipAlimentacao + totalChipIdentificacao + adicional20;

    console.log(`O valor total para identificar os frangos é:`);
    console.log(`Chip Alimentacao = R$ ${totalChipAlimentacao.toFixed(2)}`);
    console.log(`Chip Identificacao = R$ ${totalChipIdentificacao.toFixed(2)}`);
    console.log(`Adicional 20% = R$ ${adicional20.toFixed(2)}`);
    console.log(`Valor Total = R$ ${valorTotal.toFixed(2)}`);
};

calcularGastoTotal(qtdeFrangos, valorChipAlimentacao, valorChipIdentificacao);
