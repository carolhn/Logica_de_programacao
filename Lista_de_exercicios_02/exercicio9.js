// 9. Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar.
// Faça um algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar, mas faça
// com que Carlos e André não paguem os centavos, caso os centavos sejam menor ou igual a 30
// centavos. Caso os centavos sejam maior que 30 centavos, a conta deve ser divida igualmente
// entre os três.

const valorConta = parseFloat(prompt("Informe o valor da conta R$: "));

const divideConta = (valorTotal) => {
    const valorCentavos = (valorTotal * 100) % 100;
    const valorInteiro = Math.floor(valorTotal);

    if (valorCentavos <= 30) {
        const valorPorPessoa = Math.floor(valorTotal / 3 * 100) / 100;
        const valorAndre = valorPorPessoa;
        const valorCarlos = valorPorPessoa;
        const valorFelipe = valorPorPessoa;

        console.log(`Carlos pagará: R$ ${valorCarlos.toFixed(2)}`);
        console.log(`André pagará: R$ ${valorAndre.toFixed(2)}`);
        console.log(`Felipe pagará: R$ ${valorFelipe.toFixed(2)}`);
    } else {
        const valorPorPessoa = Math.floor(valorTotal / 3 * 100) / 100;

        console.log(`Carlos pagará: R$ ${valorPorPessoa.toFixed(2)}`);
        console.log(`André pagará: R$ ${valorPorPessoa.toFixed(2)}`);
        console.log(`Felipe pagará: R$ ${valorPorPessoa.toFixed(2)}`);
    }
}

divideConta(valorConta);
