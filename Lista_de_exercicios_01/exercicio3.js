// 3. Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua
// média ponderada (as notas tem pesos respectivos de 1, 2 e 3). Resultado esperado:

const nota1 = parseFloat(prompt("Informe a primeira nota: "));
const nota2 = parseFloat(prompt("Informe a segunda nota: "));
const nota3 = parseFloat(prompt("Informe a terceira nota: "));

const calculaMedia = (nota1, nota2, nota3) => {
    const media = (nota1 + nota2 + nota3) / 3;
    return media.toFixed(2);
}

console.log(`A média ponderada das notas: ${nota1}, ${nota2}, ${nota3} é: ${calculaMedia(nota1, nota2, nota3)}`);