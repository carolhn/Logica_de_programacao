// 11. Faça um algoritmo que receba o mes e ano de nascimento de uma pessoa e o mes
// e ano atual, calcule e mostre a idade desta pessoa em anos, meses e dias. Como existe a
// possibilidade do usuario digitar o ano atual menor do que o ano de nascimento, ou os meses
// foram do intervalo de 1 à 12, deverá ser exibido a mensagem “Impossivel realizar o calculo. Anos
// e/ou meses invalidos”. Considere para o mes inicial o primeiro dia e para o mes final o ultimo dia
// do respectivo mês.

const mesInicial = parseInt(prompt("Digite o mes inicial: "));
const anoInicial = parseInt(prompt("Digite o ano inicial: "));
const mesFinal = parseInt(prompt("Digite o mes final: "));
const anoFinal = parseInt(prompt("Digite o ano final: "));

if (mesInicial < 1 || mesInicial > 12 || mesFinal < 1 || mesFinal > 12) {
    console.log("Impossivel realizar o calculo. Anos e/ou meses invalidos");
} else if (anoInicial > anoFinal) {
    console.log("Impossivel realizar o calculo. Anos e/ou meses invalidos");
}

const calculaIdade = (mesInicial, anoInicial, mesFinal, anoFinal) => {
    let idade = anoFinal - anoInicial;
    let meses = mesFinal - mesInicial;

    if (meses < 0) {
        meses += 12;
        idade--;
    }

    const converterDia = (mes) => {
        switch (mes) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            case 2:
                return 28;
        }
    };

    let totalDias = 0;

    for (let i = mesInicial; i <= mesFinal; i++) {
        totalDias += converterDia(i);
    }

    return `A idade desta pessoa em dias e: ${idade * 365 + totalDias} dias`;
}

console.log(calculaIdade(mesInicial, anoInicial, mesFinal, anoFinal));
