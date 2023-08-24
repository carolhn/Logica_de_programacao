// 3. Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a
// sua média ponderada (as notas tem pesos respectivos de 1, 2 e 3). Calcule o valor das notas com
// base em seus pesos e além de apresentar a média, exiba a maior nota entre as 3 notas, ou a
// mensagem “As 3 notas são iguais”, ou “As notas 1 e 2 são as maiores”, “As notas 1 e 3 são as
// maiores”, “As notas 2 e 3 são as maiores” caso exista duas notas iguais e elas sejam as maiores.

const nota1 = parseFloat(prompt("Informe o valor da primeira nota: "));
const nota2 = parseFloat(prompt("Informe o valor da segunda nota: "));
const nota3 = parseFloat(prompt("Informe o valor da terceira nota: "));

function calcularMedia(nota1, nota2, nota3) {
    return (nota1 * 1 + nota2 * 2 + nota3 * 3) / 6;
}

const media = calcularMedia(nota1, nota2, nota3);

console.log(`A media ponderada das notas ${nota1.toFixed(2)}, ${nota2.toFixed(2)} e ${nota3.toFixed(2)} é ${media.toFixed(2)}.`);

if (nota1 === nota2 && nota2 === nota3) {
    console.log("As 3 notas são iguais");
} else {
    if (nota1 >= nota2 && nota1 >= nota3) {
        console.log(`A nota 1 (${nota1.toFixed(2)}) é a maior nota após o cálculo do peso 3 (${(nota1 * 3).toFixed(2)})`);
    } else if (nota2 >= nota1 && nota2 >= nota3) {
        console.log(`A nota 2 (${nota2.toFixed(2)}) é a maior nota após o cálculo do peso 3 (${(nota2 * 3).toFixed(2)})`);
    } else {
        console.log(`A nota 3 (${nota3.toFixed(2)}) é a maior nota após o cálculo do peso 3 (${(nota3 * 3).toFixed(2)})`);
    }
}



