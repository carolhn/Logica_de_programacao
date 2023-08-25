// 5. Faça um algoritmo que receba dois números inteiros, calcule e mostre a divisão do
// do maior número pelo menor número. Sabe-se que o segundo número não pode ser zero, desta
// forma se o usuário digitar 0 deverá ser exibido uma mensagem “A operação não pode ser
// realizada

const numero1 = parseInt(prompt("Informe o primeiro número: "));
const numero2 = parseInt(prompt("Informe o segundo número: "));

if (numero2 === 0 || numero1 === 0) {
    console.log("A operação não pode ser realizada.");
} else {
    const maiorNumero = Math.max(numero1, numero2);
    const menorNumero = Math.min(numero1, numero2);

    const resultadoDivisao = (maiorNumero / menorNumero);

    console.log(`A divisão de ${maiorNumero} por ${menorNumero} é ${resultadoDivisao.toFixed(2)}`);
}


