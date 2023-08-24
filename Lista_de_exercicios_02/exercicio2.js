// 2. Faça um algoritmo que receba o valor do salário mínimo e o valor do salário de um
// funcionário, calcule e mostre a quantidade de salários mínimos que ganha esse funcionário. Caso
// o funcionário receba menos que 1 salário mínimo deverá ser apresentado a mensagem
// “Funcionário ganha menos que um salário mínimo”.

const salMinimo = parseFloat(prompt("Informe o valor do salario minimo: "));
const salFuncionario = parseFloat(prompt("Informe o valor do salario do funcionario: "));

function calcularSalario(salMinimo, salFuncionario) {
    return salFuncionario / salMinimo;
}

const salario = calcularSalario(salMinimo, salFuncionario);
const salarioArredondado = Math.ceil(salario * 10) / 10;

if (salario < 1) {
    console.log("Funcionario ganha menos que um salario minimo");
} else {
    console.log(`O funcionario ganha ${salarioArredondado.toFixed(1)} salarios minimos`);
}
