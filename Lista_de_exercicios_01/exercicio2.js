// 2. Faça um algoritmo que receba o valor do salário mínimo e o valor do salário de um
// funcionário, calcule e mostre a quantidade de salários mínimos que ganha esse funcionário.

const salMinimo = parseFloat(prompt("Informe o valor do salário mínimo: "));
const salFuncionario = parseFloat(prompt("Informe o valor do salário do funcionário: "));


const calculaSalario = (salMinimo, salFuncionario) => {
    const calcula = salFuncionario / salMinimo;
    return calcula.toFixed(2);
}

console.log(`O funcionário recebe ${calculaSalario(salMinimo, salFuncionario)} salários mínimos!`);