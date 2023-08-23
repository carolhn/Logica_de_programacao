// 5. Faça um algoritmo que receba dois números inteiros, calcule e mostre a divisão do
// primeiro número pelo segundo. Sabe-se que o segundo número não pode ser zero, portanto não é necessário se preocupar com validações. Resultado esperado:
// OBS: Para forçar uma divisão de dois números inteiro produzir um resultado fracionário, utilizamos a palavra float entre parênteses. Exemplo: (a/(float)b). Neste caso, forçamos o
// compilador entender que a variavel b apesar de ser inteira deve ser convertida para float

const numero1 = parseInt(prompt("Informe o primeiro número: "));
const numero2 = parseInt(prompt("Informe o segundo número: "));

const calculaDivisao = (numero1, numero2) => {
    return (numero1 / numero2).toFixed(2);
}

console.log(`A divisão de ${numero1} por ${numero2} é ${calculaDivisao(numero1, numero2)}`);