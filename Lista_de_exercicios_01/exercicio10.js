// 10. Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre.


const anoNascimento = parseInt(prompt("Informe o ano de nascimento: "));
const anoAtual = parseInt(prompt("Informe o ano atual: "));


// a) a idade dessa pessoa em anos;
const calculaIdadeAnos = (anoNascimento, anoAtual) => {
    return anoAtual - anoNascimento;
}
console.log(`anos e: ${calculaIdadeAnos(anoNascimento, anoAtual)}`);


// b) a idade dessa pessoa em meses;
const calculaIdadeMeses = (anoNascimento, anoAtual) => {
    return (anoAtual - anoNascimento) * 12;
}
console.log(`meses e: ${calculaIdadeMeses(anoNascimento, anoAtual)}`);


// c) a idade dessa pessoa em dias; considere todos os meses com 30 dias
const calculaIdadeDias = (anoNascimento, anoAtual) => {
    return (anoAtual - anoNascimento) * 360;
}
console.log(`dias e: ${calculaIdadeDias(anoNascimento, anoAtual)}`);


// d) a idade dessa pessoa em semanas, considere que todos os messes possuem 4
// semanas;
const calculaIdadeSemanas = (anoNascimento, anoAtual) => {
    return (anoAtual - anoNascimento) * 48;
}
console.log(`semanas e: ${calculaIdadeSemanas(anoNascimento, anoAtual)}`);